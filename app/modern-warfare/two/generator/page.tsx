import { Container, Row, Col } from "react-bootstrap";
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Loadout ---
import ModernWarfareTwoLoadout from "@/components/generators/modern-warfare/ModernWarfareTwoLoadout";

// --- Metadata ---
export const metadata: Metadata = {
  title: "Modern Warfare Two",
  description:
    "Spice up your COD Zombies gameplay! Generate unique random loadouts for Modern Warfare Two. Discover new weapons, perks, and gear combinations.",
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
    "COD Modern Warfare Two RCG",
    "modern warfare two random class generator",
    "modern warfare two",
    "modern warfare two rcg",
    "class generator",
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Multiplayer Generator",
    href: "/modern-warfare/two/generator",
  },
  { label: "Loadout Info", href: "/modern-warfare/two/info" },
  { label: "Changelog", href: "/changelog" },
];

export default function ModernWarfareTwoGeneratorPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName="mw2">
      <Container>
        <h2 className="text-center mb-4">
          Modern Warfare Two
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Random Class Generator
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col className="mx-auto">
            <ModernWarfareTwoLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
