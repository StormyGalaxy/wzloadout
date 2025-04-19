import { Container, Row, Col } from "react-bootstrap";
// --- Next ---
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Components ---
import StreakList from "@/components/info/StreakList";

// --- Metadata ---
export const metadata: Metadata = {
  title: "Black Ops Six Streaks",
  description: "View all streaks in Black Ops Six.",
  keywords: [
    "COD Black Ops Six RCG",
    "black ops six random class generator",
    "black ops six",
    "black ops six rcg",
    "class generator",
    "zombies",
    "treyarch zombies",
    "black ops six zombies",
    "black ops six rcg",
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Multiplayer Generator", href: "/black-ops/six/generator" },
  { label: "Zombies Generator", href: "/black-ops/six/zombies-generator" },
  { label: "Loadout Info", href: "/black-ops/six/info" },
  { label: "Changelog", href: "/changelog" },
];

export default function BlackOpsSixStreaksPage() {
  const dataKeys = ["name", "score", "type", "game", "isDlc"];

  return (
    <PageLayout navLinks={navLinks} headerClassName="black-ops">
      <Container>
        <h2 className="text-center mb-4">
          Black Ops Six
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Streaks
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col>
            <StreakList game="black-ops-six" dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
