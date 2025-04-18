import { Container, Row, Col } from "react-bootstrap";
// --- Next ---
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Components ---
import PerkList from "@/components/info/PerkList";

// --- Metadata ---
export const metadata: Metadata = {
  title: "Modern Warfare Remastered Perks",
  description: "View all perks in Modern Warfare Remastered.",
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

export default function ModernWarfareRemasteredPerksPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName="mwr">
      <Container>
        <h2 className="text-center mb-4">
          Modern Warfare Remastered
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Perks
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col>
            <PerkList game="modern-warfare-remastered" />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
