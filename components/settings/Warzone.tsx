import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
//Components
import CustomAlert from "@/components/_silabs/bootstrap/CustomAlert";
//styles
import styles from "@/public/styles/components/Settings.module.css";
//Types
import { sclSettings } from "@/types/_fw";

const warzoneGames = ["Black Ops 6", "Modern Warfare 3", "Modern Warfare 2"];
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
        onDataChange(allData);
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
      if (!newData[`wz${type}Weapons`]) {
        newData[`wz${type}Weapons`] = {};
      }
      newData[`wz${type}Weapons`][header] = isChecked;
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
                      className={`me-2 custom-checkbox ${styles.wzCheckbox}`}
                      checked={wzData[`wz${type}Weapons`]?.[header] || false} // Use optional chaining
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
      </Col>
    </Row>
  );
}
