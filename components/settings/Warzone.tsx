import React from "react"; // Removed useState, useEffect
import { Row, Col, Form } from "react-bootstrap";
//styles
import styles from "@/public/styles/components/Settings.module.css";
//Types
import { sclSettings } from "@/types/_fw";

const warzoneGames = [
  { key: "black-ops-six", value: "Black Ops 6" },
  { key: "modern-warfare-three-wz", value: "Modern Warfare 3" },
];
const warzoneTypes = ["Primary", "Secondary", "Melee"];

interface WarzoneProps {
  settingsData: sclSettings;
  onDataChange: (updatedData: sclSettings) => void;
}

export default function Warzone({ settingsData, onDataChange }: WarzoneProps) {
  const handleCheckboxChange = (
    type: string,
    header: string,
    isChecked: boolean
  ) => {
    // Create a deep clone of the *current* settings data from props
    const newData = structuredClone(settingsData);

    // Ensure the nested structure exists before modifying
    if (!newData.warzone) {
      newData.warzone = {};
    }
    if (!newData.warzone.weapons) {
      newData.warzone.weapons = { primary: {}, secondary: {}, melee: {} };
    }
    // Ensure the specific weapon type object exists
    const weaponTypeKey =
      type.toLowerCase() as keyof typeof newData.warzone.weapons;
    if (!newData.warzone.weapons[weaponTypeKey]) {
      // Initialize if it doesn't exist, though parent initialization should cover this
      newData.warzone.weapons[weaponTypeKey] = {};
    }

    // Update the specific checkbox value in the cloned object
    newData.warzone.weapons[weaponTypeKey][header] = isChecked;

    // Notify the parent component (`Settings`) of the entire updated data object
    onDataChange(newData);
  };

  // Directly access settingsData from props
  const weaponsData = settingsData?.warzone?.weapons || {
    primary: {},
    secondary: {},
    melee: {},
  };

  return (
    <Row>
      <Col className={styles.warzoneSettings}>
        {warzoneTypes.map((type) => (
          <React.Fragment key={type}>
            <h5 className="text-center">{type} Weapons</h5>
            <hr />
            <Row className="justify-content-center mb-5">
              <Col className="d-flex flex-wrap justify-content-center">
                {warzoneGames.map((data) => {
                  const weaponTypeKey =
                    type.toLowerCase() as keyof typeof weaponsData;
                  const isChecked =
                    weaponsData[weaponTypeKey]?.[data.key] || false;

                  return (
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
                        checked={isChecked}
                        onChange={(e) =>
                          handleCheckboxChange(
                            type.toLowerCase(),
                            data.key,
                            e.target.checked
                          )
                        }
                      />
                    </div>
                  );
                })}
              </Col>
            </Row>
          </React.Fragment>
        ))}
      </Col>
    </Row>
  );
}
