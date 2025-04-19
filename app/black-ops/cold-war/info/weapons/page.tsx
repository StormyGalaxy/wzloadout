import { Container, Row, Col } from "react-bootstrap";
// --- Next ---
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Components ---
import WeaponList from "@/components/info/WeaponList";

// --- Metadata ---
export const metadata: Metadata = {
  title: "Black Ops Cold War Weapons",
  description: "View all weapons in Black Ops Cold War.",
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

export default function ColdWarWeaponsPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName="cold-war">
      <Container>
        <h2 className="text-center mb-4">
          Black Ops Cold War
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Weapons
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col>
            <WeaponList game="cold-war" link={"black-ops/cold-war"} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
