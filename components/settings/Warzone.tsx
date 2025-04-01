import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
//Components
import CustomAlert from "@/components/_silabs/bootstrap/CustomAlert";
//styles
import styles from "@/public/styles/components/Settings.module.css";
//Types
import { sclSettings } from "@/types/_fw";

const warzoneGames = [{ key: "black-ops-six", value: "Black Ops 6" }, { key: "modern-warfare-three-wz", value: "Modern Warfare 3" }];
const warzoneTypes = ["Primary", "Secondary", "Melee"];

interface WarzoneProps {
  db: PouchDB.Database;
  settingsData: sclSettings;
  onDataChange: (updatedData: sclSettings) => void;
}

export default function Warzone({ db, settingsData, onDataChange }: WarzoneProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [wzData, setWzData] = useState<sclSettings>(settingsData || {});
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (db) {
      try {
        const allData = structuredClone(wzData);
        if (!allData.warzone.weapons) {
          allData.warzone.weapons = { primary: {}, secondary: {}, melee: {} };
          warzoneGames.forEach((data) => {
            allData.warzone.weapons.primary[data.key] = false;
            allData.warzone.weapons.secondary[data.key] = false;
            allData.warzone.weapons.melee[data.key] = false;
          });
          onDataChange(allData);
        }
        console.log("allData", allData);
        setWzData(allData);
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
  }, [db]);

  const handleCheckboxChange = (
    type: string,
    header: string,
    isChecked: boolean
  ) => {
    setWzData((prevData) => {
      const newData = { ...prevData };
      newData.warzone.weapons[type][header] = isChecked;
      onDataChange(newData);
      return newData;
    });
  };

  if (isLoading) {
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
                {warzoneGames.map((data) => (
                  <div
                    key={data.key}
                    className="d-flex"
                    style={{ width: "50%", maxWidth: "200px" }}
                  >
                    <Form.Check
                      type="checkbox"
                      id={`checkbox-${data.key}-${type}`}
                      label={data.value}
                      className={`me-2 custom-checkbox ${styles.wzCheckbox}`}
                      checked={wzData.warzone.weapons[type.toLowerCase()]?.[data.key] || false}
                      onChange={(e) =>
                        handleCheckboxChange(type.toLowerCase(), data.key, e.target.checked)
                      }
                    />
                  </div>
                ))}
              </Col>
            </Row>
          </React.Fragment>
        ))}
      </Col>
    </Row>
  );
}
