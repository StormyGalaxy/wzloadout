import { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
// --- Next ---
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Components ---
import WeaponDisplayClient from "@/components/info/WeaponDisplayClient";

// --- Metadata ---
export const metadata: Metadata = {
  title: "Modern Warfare Remastered Weapons",
  description:
    "View information and all available attachments for the weapon in Modern Warfare Remastered.",
  keywords: [
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

export default function ModernWarfareRemasteredWeaponPage() {
  const game = "modern-warfare-remastered";

  return (
    <PageLayout navLinks={navLinks} headerClassName="mwr">
      <Container fluid>
        <Row>
          <Suspense
            fallback={
              <Col>
                <p className="text-center">Loading page...</p>
              </Col>
            }
          >
            <WeaponDisplayClient game={game} />
          </Suspense>
        </Row>
      </Container>
    </PageLayout>
  );
}
