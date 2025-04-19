import { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
// --- Next ---
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Components ---
import WeaponDisplayClient from "@/components/info/WeaponDisplayClient";

type Props = {
  params: object;
  searchParams: { [key: string]: string | string[] | undefined };
};

// --- Dynamic Metadata Generation ---
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const weaponName = searchParams?.value || "Unknown Weapon";
  const displayWeaponName = Array.isArray(weaponName)
    ? weaponName[0]
    : weaponName;
  const gameName = "World At War";

  return {
    title: `${gameName} Weapon - ${displayWeaponName}`,
    description: `View information and all available attachments for the ${displayWeaponName} weapon in Call of Duty: ${gameName}.`,
    keywords: [
      "Call of duty",
      gameName.toLowerCase(),
      "weapon",
      "info",
      "attachments",
      displayWeaponName,
      "random class generator",
      "rcg",
      "cod",
      "loadout",
      "multiplayer",
      "zombies",
    ],
  };
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Multiplayer Generator", href: "/world-at-war/generator" },

  { label: "Loadout Info", href: "/world-at-war/info" },
  { label: "Changelog", href: "/changelog" },
];

export default function WorldAtWarWeaponPage() {
  const game = "world-at-war";

  return (
    <PageLayout navLinks={navLinks} headerClassName="waw">
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
