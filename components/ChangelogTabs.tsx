"use client";

import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
// --- Components ---
import Changelog2024 from "@/components/changelog/Changelog2024";
import Changelog2025 from "@/components/changelog/Changelog2025";

export default function SettingsTabs() {
  const [key, setKey] = useState<string>("2025");

  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k ?? "2025")}
      className="mb-3"
    >
      <Tab eventKey="2024" title="2024">
        <Changelog2024 />
      </Tab>
      <Tab eventKey="2025" title="2025">
        <Changelog2025 />
      </Tab>
    </Tabs>
  );
}
