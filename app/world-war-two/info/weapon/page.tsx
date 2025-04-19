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
  title: "World War Two Weapons",
  description:
    "View information and all available attachments for the weapon in World War Two.",
  keywords: [
    "COD World War Two RCG",
    "world war two random class generator",
    "world war two",
    "world war two rcg",
    "world war two random class generator",
    "class generator",
    "zombies",
    "world war two zombies",
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Multiplayer Generator", href: "/world-war-two/generator" },
  { label: "Zombies Generator", href: "/world-war-two/zombies-generator" },
  { label: "Custom Match", href: "/world-war-two/custom-match" },
  { label: "Loadout Info", href: "/world-war-two/info" },
  { label: "Changelog", href: "/changelog" },
];

export default function WorldWarTwoWeaponPage() {
  const game = "world-war-two";

  return (
    <PageLayout navLinks={navLinks} headerClassName="ww2">
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
