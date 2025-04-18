import { Container, Row, Col } from "react-bootstrap";
// --- Next ---
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Components ---
import WeaponList from "@/components/info/WeaponList";

// --- Metadata ---
export const metadata: Metadata = {
  title: "Modern Warfare Three Weapons",
  description: "View all weapons in Modern Warfare Three.",
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

export default function ModernWarfareThreeWeaponsPage() {
  const dataKeys = [
    "name",
    "type",
    "game",
    "no_attach",
    "no_attach_info",
    "isDlc",
  ];
  return (
    <PageLayout navLinks={navLinks} headerClassName="modern-warfare">
      <Container>
        <h2 className="text-center mb-4">
          Modern Warfare Three
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Weapons
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col>
            <WeaponList
              game="modern-warfare-three"
              dataKeys={dataKeys}
              link={"modern-warfare/three"}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
