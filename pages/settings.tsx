import { useEffect, useState } from "react";
import Head from "next/head";
import { Container, Row, Col, Tabs, Tab, Button } from "react-bootstrap";
import Header from "@/components/Header";
//Components
import CustomAlert from "@/components/_silabs/bootstrap/CustomAlert";
import Warzone from "@/components/settings/Warzone";
//DB
import getAllSettings from "@/helpers/database/settings/getAllSettings";
import saveSettings from "@/helpers/database/settings/saveSettings";
import { useDatabase } from "@/contexts/DatabaseContext";
//Types
import { sclSettings } from "@/types/_fw";

export default function Settings() {
  const { dbs, isReady } = useDatabase();
  const [key, setKey] = useState<string>("warzone");
  const [data, setData] = useState<sclSettings>({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);


  useEffect(() => {
    async function fetchData() {
      if (dbs.settings) {
        try {
          const allData = await getAllSettings(dbs.settings);
          setData(allData);
        } catch (err: unknown) {
          const errorMessage =
            err instanceof Error ? err.message : "Failed to fetch settings.";
          setAlertVariant("danger");
          setAlertMessage(errorMessage);
          setShowAlert(true);
        } finally {
          setIsLoading(false);
        }
      }
    }
    if (isReady) {
      fetchData();
    }
  }, [dbs, isReady]);


  const save = async () => {
    if (!dbs.settings) {
      console.error("Database is not initialized.");
      setAlertVariant("danger");
      setAlertMessage("Database is not initialized.");
      setShowAlert(true);

      return;
    }

    setIsSpinning(true);

    try {
      await saveSettings(dbs.settings, data);
      setAlertVariant("success");
      setAlertMessage("Settings Saved!");
      setShowAlert(true);
    } catch (error: unknown) {
      console.error("Error saving settings:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unknown error occurred while saving settings.";
      setAlertVariant("danger");
      setAlertMessage(errorMessage);
      setShowAlert(true);
    } finally {
      setIsSpinning(false);
    }
  };

  const handleWarzoneDataChange = (updatedData: sclSettings) => {
    setData(updatedData);
  };

  if (!isReady || isLoading) {
    return <div className="text-center">Loading database...</div>;
  }

  return (
    <>
      <Head>
        <title>Settings - Call Of Duty Random Class Generator</title>
      </Head>
      <Header />
      <Container className="shadow-lg p-3 mt-4 bg-body rounded">
        <Row>
          <Col>
            <CustomAlert
              variant={alertVariant}
              message={alertMessage}
              show={showAlert}
              onClose={() => setShowAlert(false)}
            />
            <Container>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k ?? "warzone")}
                className="mb-3"
              >
                <Tab eventKey="warzone" title="Warzone">
                  <Warzone db={dbs.settings} settingsData={data} onDataChange={handleWarzoneDataChange} />
                </Tab>
              </Tabs>
            </Container>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
          <Col xs={12} sm={6} md={3}>
            <div className="d-flex justify-content-center">
              <Button
                variant="success"
                className="w-100"
                disabled={isSpinning}
                onClick={save}
              >
                Save Settings
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
