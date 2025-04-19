"use client";

import { useState, useEffect } from "react";
import { Row, Col, Tabs, Tab, Button, Spinner } from "react-bootstrap";
// --- Components ---
import CustomSettingsGeneral from "@/components/generators/cod/custom-settings/CustomSettingsGeneral";
import CustomSettingsSection from "@/components/generators/cod/custom-settings/CustomSettingsSection";
// --- Data ---
import generalSettings from "@/json/black-ops/four/zombies/custom-mutations/general.json";
import systemsSettings from "@/json/black-ops/four/zombies/custom-mutations/systems.json";
import weaponSettings from "@/json/black-ops/four/zombies/custom-mutations/weapons.json";
import enemiesSettings from "@/json/black-ops/four/zombies/custom-mutations/enemies.json";
import playerSettings from "@/json/black-ops/four/zombies/custom-mutations/player.json";

export default function CustomMutations() {
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState<string>("general");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleClick = async () => {
    setIsLoading(true);
    setCount(count + 1);
    setKey("general");

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k ?? "general")}
            className="mb-3"
          >
            <Tab eventKey="general" title="General">
              <CustomSettingsGeneral data={generalSettings} count={count} />
            </Tab>
            <Tab eventKey="systems" title="Systems">
              <CustomSettingsSection data={systemsSettings} count={count} />
            </Tab>
            <Tab eventKey="weapons" title="Weapons">
              <CustomSettingsSection data={weaponSettings} count={count} />
            </Tab>
            <Tab eventKey="enemies" title="Enemies">
              <CustomSettingsSection data={enemiesSettings} count={count} />
            </Tab>
            <Tab eventKey="player" title="Player">
              <CustomSettingsSection data={playerSettings} count={count} />
            </Tab>
          </Tabs>
          <Row id="button-row">
            <Col className="text-center">
              <Button variant="black-ops" href="#" onClick={handleClick}>
                Generate Settings
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}
