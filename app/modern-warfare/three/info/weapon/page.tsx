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
  title: "Modern Warfare Three Weapons",
  description:
    "View information and all available attachments for the weapon in Modern Warfare Three.",
  keywords: [
    "COD Modern Warfare Three RCG",
    "modern warfare three random class generator",
    "modern warfare three",
    "modern warfare three rcg",
    "class generator",
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Multiplayer Generator",
    href: "/modern-warfare/three/generator",
  },
  {
    label: "Zombies Generator",
    href: "/modern-warfare/three/zombies-generator",
  },
  { label: "Loadout Info", href: "/modern-warfare/three/info" },
  { label: "Changelog", href: "/changelog" },
];

export default function ModernWarfareThreeWeaponPage() {
  const game = "modern-warfare-three";

  return (
    <PageLayout navLinks={navLinks} headerClassName="modern-warfare">
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
