import { Container, Row, Col } from "react-bootstrap";
// --- Next ---
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Components ---
import StreakList from "@/components/info/StreakList";

// --- Metadata ---
export const metadata: Metadata = {
  title: "Vanguard Streaks",
  description: "View all streaks in Vanguard.",
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
  { label: "Multiplayer Generator", href: "/vanguard/generator" },
  { label: "Zombies Generator", href: "/vanguard/zombies-generator" },
  { label: "Loadout Info", href: "/vanguard/info" },
  { label: "Changelog", href: "/changelog" },
];

export default function VanguardStreaksPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName="vanguard">
      <Container>
        <h2 className="text-center mb-4">
          Vanguard
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Streaks
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col>
            <StreakList game="vanguard" />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
