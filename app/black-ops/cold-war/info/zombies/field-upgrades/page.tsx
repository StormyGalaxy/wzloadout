import { Container, Row, Col } from "react-bootstrap";
// --- Next ---
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Components ---
import ZombiesFieldUpgradeList from "@/components/info/ZombiesFieldUpgradeList";

// --- Metadata ---
export const metadata: Metadata = {
  title: "Black Ops Cold War Zombies Field Upgrades",
  description: "View all field upgrades in Black Ops Cold War Zombies.",
  keywords: [
    "COD Black Ops Cold War RCG",
    "black ops cold war random class generator",
    "black ops cold war",
    "black ops cold war rcg",
    "class generator",
    "zombies",
    "treyarch zombies",
    "black ops cold war zombies",
    "black ops cold war rcg",
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Multiplayer Generator", href: "/black-ops/cold-war/generator" },
  { label: "Zombies Generator", href: "/black-ops/cold-war/zombies-generator" },
  { label: "Loadout Info", href: "/black-ops/cold-war/info" },
  { label: "Changelog", href: "/changelog" },
];

export default function ColdWarZombiesFieldUpgradesPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName="cold-war">
      <Container>
        <h2 className="text-center mb-4">
          Black Ops Cold War
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Zombies Field Upgrades
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col>
            <ZombiesFieldUpgradeList game="cold-war" />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
