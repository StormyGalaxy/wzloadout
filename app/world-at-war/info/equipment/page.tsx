import { Container, Row, Col } from "react-bootstrap";
// --- Next ---
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Components ---
import EquipmentList from "@/components/info/EquipmentList";

// --- Metadata ---
export const metadata: Metadata = {
  title: "World At War Equipment",
  description: "View all equipment in World At War.",
  keywords: [
    "Call of duty",
    "call",
    "of",
    "duty",
    "cod",
    "call of duty",
    "random",
    "class",
    "generator",
    "random class generator",
    "rcg",
    "free",
    "mp",
    "multiplayer",
    "call of duty random class generator",
    "COD World At War RCG",
    "COD WAW RCG",
    "waw random class generator",
    "waw",
    "world at war",
    "world at war rcg",
    "world at war random class generator",
    "class generator",
    "zombies",
    "world at war zombies",
    "world at war zombies",
    "world at war rcg",
    "world at war random class generator",
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Multiplayer Generator", href: "/world-at-war/generator" },
  { label: "Loadout Info", href: "/world-at-war/info" },
  { label: "Changelog", href: "/changelog" },
];

export default function WorldAtWarEquipmentPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName="waw">
      <Container>
        <h2 className="text-center mb-4">
          World At War
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Equipment
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col>
            <EquipmentList game="world-at-war" />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
