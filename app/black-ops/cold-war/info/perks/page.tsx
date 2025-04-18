import { Container, Row, Col } from "react-bootstrap";
// --- Next ---
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Components ---
import PerkList from "@/components/info/PerkList";

// --- Metadata ---
export const metadata: Metadata = {
  title: "Black Ops Cold War Perks",
  description: "View all perks in Black Ops Cold War.",
  keywords: [
    "COD Black Ops Cold War RCG",
    "vanguard random class generator",
    "vanguard",
    "vanguard rcg",
    "vanguard random class generator",
    "class generator",
    "zombies",
    "treyarch zombies",
    "vanguard zombies",
    "vanguard rcg",
    "vanguard random class generator",
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Multiplayer Generator", href: "/vanguard/generator" },
  { label: "Zombies Generator", href: "/vanguard/zombies-generator" },
  { label: "Loadout Info", href: "/vanguard/info" },
  { label: "Changelog", href: "/changelog" },
];

export default function VanguardPerksPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName="vanguard">
      <Container>
        <h2 className="text-center mb-4">
          Black Ops Cold War
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Perks
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col>
            <PerkList game="vanguard" />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
