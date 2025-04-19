import { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
// --- Next ---
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Components ---
import WeaponDisplayClient from "@/components/info/WeaponDisplayClient";

type Props = {
  params: {};
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
  const gameName = "Black Ops Four";

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
  { label: "Multiplayer Generator", href: "/black-ops/four/generator" },
  { label: "Zombies Generator", href: "/black-ops/four/zombies-generator" },
  {
    label: "Zombies Custom Mutations",
    href: "/black-ops/four/zombies/custom-mutations",
  },
  { label: "Loadout Info", href: "/black-ops/four/info" },
  { label: "Changelog", href: "/changelog" },
];

export default function BlackOpsFourWeaponPage() {
  const game = "black-ops-four";

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
