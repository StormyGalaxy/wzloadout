import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
//Components
import CustomAlert from "@/components/_silabs/bootstrap/CustomAlert";
//styles
import styles from "@/public/styles/components/Settings.module.css";
//DB
import getAllSettings from "@/helpers/database/settings/getAllSettings";
import saveSettings from "@/helpers/database/settings/saveSettings";
import { useDatabase } from "@/contexts/DatabaseContext";
//Types
import { sclSettings } from "@/types/global";

const warzoneGames = ["Black Ops 6", "Modern Warfare 3", "Modern Warfare 2"];
const warzoneTypes = ["Primary", "Secondary", "Melee"];

export default function Warzone() {
  const { dbs, isReady } = useDatabase();
  const [isSpinning, setIsSpinning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<sclSettings>({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (dbs.settings) {
        try {
          const allData = await getAllSettings(dbs.settings);
          // Initialize if not present in the database
          if (!allData.wzPrimaryWeapons) {
            allData.wzPrimaryWeapons = {};
            allData.wzSecondaryWeapons = {};
            allData.wzMeleeWeapons = {};
            warzoneGames.forEach((header) => {
              allData.wzPrimaryWeapons[header] = true;
              allData.wzSecondaryWeapons[header] = true;
              allData.wzMeleeWeapons[header] = true;
            });
          }
          setData(allData);
          // console.log("allData", allData); // Consider removing in production
        } catch (err: unknown) {
          const errorMessage =
            err instanceof Error ? err.message : "Failed to fetch settings.";
          setAlertVariant("danger"); // Set alert variant to danger on error
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

  const handleCheckboxChange = (
    type: string,
    header: string,
    isChecked: boolean
  ) => {
    setData((prevData) => {
      const newData = { ...prevData };
      if (!newData[`wz${type}Weapons`]) {
        newData[`wz${type}Weapons`] = {};
      }
      newData[`wz${type}Weapons`][header] = isChecked;
      return newData;
    });
  };

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

  if (!isReady || isLoading) {
    return <div className="text-center">Loading database...</div>;
  }

  return (
    <Row>
      <Col className={styles.warzoneSettings}>
        <CustomAlert
          variant={alertVariant}
          message={alertMessage}
          show={showAlert}
          onClose={() => setShowAlert(false)}
        />
        {warzoneTypes.map((type) => (
          <React.Fragment key={type}>
            <h5 className="text-center">{type} Weapons</h5>
            <hr />
            <Row className="justify-content-center mb-5">
              <Col className="d-flex flex-wrap justify-content-center">
                {warzoneGames.map((header) => (
                  <div
                    key={header}
                    className="d-flex"
                    style={{ width: "50%", maxWidth: "200px" }}
                  >
                    <Form.Check
                      type="checkbox"
                      id={`checkbox-${header.replace(/\s/g, "")}-${type}`} // Added type to the ID
                      label={header}
                      className="me-2"
                      checked={data[`wz${type}Weapons`]?.[header] || false} // Use optional chaining
                      onChange={(e) =>
                        handleCheckboxChange(type, header, e.target.checked)
                      }
                    />
                  </div>
                ))}
              </Col>
            </Row>
          </React.Fragment>
        ))}
        <Row className="mt-5 justify-content-center">
          <Col xs={12} sm={6} md={3}>
            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                className="w-100"
                disabled={isSpinning}
                onClick={save}
              >
                Save Settings
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
