import { Container, Row, Col } from "react-bootstrap";
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Loadout ---
import InfiniteWarfareLoadout from "@/components/generators/infinite-warfare/InfiniteWarfareLoadout";

// --- Metadata ---
export const metadata: Metadata = {
  title: "Infinite Warfare",
  description:
    "Spice up your COD gameplay! Generate unique random loadouts for Call of Duty Infinite Warfare. Discover new weapons, perks, and gear combinations.",
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
    "COD Infinite Warfare RCG",
    "COD IW RCG",
    "iw random class generator",
    "iw",
    "infinite warfare",
    "infinite warfare rcg",
    "infinite warfare random class generator",
    "infinite warfare rcg",
    "infinite warfare random class generator",
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Multiplayer Generator", href: "/infinite-warfare/generator" },
  { label: "Loadout Info", href: "/infinite-warfare/info" },
  { label: "Changelog", href: "/changelog" },
];

export default function InfiniteWarfareGeneratorPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName="infinite-warfare">
      <Container>
        <h2 className="text-center mb-4">
          Infinite Warfare
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Random Class Generator
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col className="mx-auto">
            <InfiniteWarfareLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
