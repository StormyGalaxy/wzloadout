// --- React ---
import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
// --- Styles ---
import styles from '@/public/styles/components/Settings.module.css';
// --- Types ---
//Types
import type { sclSettings } from '@silocitypages/ui-core';

const warzoneGames = [
  { key: 'black-ops-six', value: 'Black Ops 6' },
  { key: 'modern-warfare-three-wz', value: 'Modern Warfare 3' },
];
const warzoneTypes = ['Primary', 'Secondary', 'Melee'];

interface WarzoneProps {
  settingsData: sclSettings;
  onDataChange: (updatedData: sclSettings) => void;
}

export default function Warzone({ settingsData, onDataChange }: WarzoneProps) {
  const handleCheckboxChange = (type: string, header: string, isChecked: boolean) => {
    const newData = structuredClone(settingsData);

    // Ensure the structure exists
    if (!newData.warzone) {
      newData.warzone = {};
    }
    if (!newData.warzone.weapons) {
      newData.warzone.weapons = { primary: {}, secondary: {}, melee: {} };
    }
    // Ensure the specific weapon type object exists
    const weaponTypeKey = type.toLowerCase() as keyof typeof newData.warzone.weapons;
    if (!newData.warzone.weapons[weaponTypeKey]) {
      // Initialize if it doesn't exist
      newData.warzone.weapons[weaponTypeKey] = {};
    }

    newData.warzone.weapons[weaponTypeKey][header] = isChecked;

    onDataChange(newData);
  };

  // Directly access settingsData from props
  const weaponsData = settingsData?.warzone?.weapons || { primary: {}, secondary: {}, melee: {} };

  return (
    <>
      {warzoneTypes.map((type) => {
        const weaponTypeKey = type.toLowerCase() as keyof typeof weaponsData; // Calculate once per type loop

        return (
          <Row key={type} className='mb-3 align-items-center'>
            <Col xs='auto' md={3} lg={2} className='pe-2'>
              <h5 className='mb-0'>{type} Weapons:</h5>{' '}
            </Col>

            {warzoneGames.map((data) => {
              const isChecked = weaponsData[weaponTypeKey]?.[data.key] || false;

              return (
                <Col key={data.key} xs='auto'>
                  <Form.Check
                    type='checkbox'
                    id={`checkbox-${data.key}-${type}`}
                    label={data.value}
                    className={`custom-checkbox ${styles.wzCheckbox}`}
                    checked={isChecked}
                    onChange={(e) =>
                      handleCheckboxChange(type.toLowerCase(), data.key, e.target.checked)
                    }
                  />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </>
  );
}
