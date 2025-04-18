import { Container, Row, Col } from "react-bootstrap";
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Loadout ---
import ModernWarfareRemasteredLoadout from "@/components/generators/modern-warfare/ModernWarfareRemasteredLoadout";

// --- Metadata ---
export const metadata: Metadata = {
  title: "Modern Warfare Remastered",
  description:
    "Spice up your COD Zombies gameplay! Generate unique random loadouts for Modern Warfare Remastered. Discover new weapons, perks, and gear combinations.",
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
    "COD Modern Warfare Remastered RCG",
    "modern warfare remastered random class generator",
    "modern warfare remastered",
    "modern warfare remastered rcg",
    "class generator",
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Multiplayer Generator",
    href: "/modern-warfare/remastered/generator",
  },
  { label: "Loadout Info", href: "/modern-warfare/remastered/info" },
  { label: "Changelog", href: "/changelog" },
];

export default function ModernWarfareRemasteredGeneratorPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName="mwr">
      <Container>
        <h2 className="text-center mb-4">
          Modern Warfare Remastered
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Random Class Generator
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col className="mx-auto">
            <ModernWarfareRemasteredLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
