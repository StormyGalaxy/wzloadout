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
  title: "Black Ops Three Weapons",
  description:
    "View information and all available attachments for the weapon in Black Ops Three.",
  keywords: [
    "COD Black Ops Three RCG",
    "black ops three random class generator",
    "black ops three",
    "black ops three rcg",
    "class generator",
    "zombies",
    "treyarch zombies",
    "black ops three zombies",
    "black ops three rcg",
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Multiplayer Generator", href: "/black-ops/three/generator" },
  { label: "Loadout Info", href: "/black-ops/three/info" },
  { label: "Changelog", href: "/changelog" },
];

export default function BlackOpsThreeWeaponPage() {
  const game = "black-ops-three";

  return (
    <PageLayout navLinks={navLinks} headerClassName="black-ops">
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
