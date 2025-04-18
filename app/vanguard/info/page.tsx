import { Container, Row, Col } from "react-bootstrap";
// --- Next ---
import type { Metadata } from "next";
import Link from "next/link";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Components ---
import CodBadge from "@/components/CodBadge";

// --- Metadata ---
export const metadata: Metadata = {
  title: "Loadout Information",
  description:
    "Spice up your COD gameplay! Generate unique random loadouts for Call of Duty Vanguard. Discover new weapons, perks, and gear combinations.",
  keywords: [
    "COD Vanguard RCG",
    "vanguard random class generator",
    "vanguard",
    "vanguard rcg",
    "vanguard random class generator",
    "class generator",
    "zombies",
    "treyarch zombies",
    "vanguard zombies",
    "vanguard rcg",
    "vanguard random class generator",
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Multiplayer Generator", href: "/vanguard/generator" },
  { label: "Zombies Generator", href: "/vanguard/zombies-generator" },
  { label: "Loadout Info", href: "/vanguard/info" },
  { label: "Changelog", href: "/changelog" },
];

const badges = [
  {
    title: "Equipment",
    link: "/vanguard/info/equipment",
  },
  {
    title: "Perks",
    link: "/vanguard/info/perks",
  },
  {
    title: "Streaks",
    link: "/vanguard/info/streaks",
  },
  {
    title: "Weapons",
    link: "/vanguard/info/weapons",
  },
  {
    title: "Zombies Artifacts",
    link: "/vanguard/info/zombies/artifacts",
  },
  {
    title: "Zombies Maps",
    link: "/vanguard/info/zombies/maps",
  },
];

export default function VanguardInfoPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName="vanguard">
      <Container>
        <h2 className="text-center mb-4">
          Vanguard
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Loadout Information
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col lg={7} className="text-center">
            <p>
              Welcome to your central hub for all essential Call of Duty:
              Vanguard data! Whether you're fine-tuning your multiplayer
              strategy or preparing to face the undead hordes, we've compiled
              the information you need. Our loadout section details every
              multiplayer <strong>weapon</strong>, <strong>perk</strong>, piece
              of <strong>equipment</strong>, <strong>wildcard</strong>, and{" "}
              <strong>killstreak</strong> available. For Zombies slayers,
              explore the available <strong>maps</strong>, discover the powerful{" "}
              <strong>Artifacts</strong> to aid your survival, and learn about
              the various <strong>Covenants</strong> you can acquire at the
              Altar, including those that function like{" "}
              <strong>ammo mods</strong>, to customize your build and overcome
              the darkness. Find all the links on this page to get started.
            </p>
          </Col>
          <Col lg={5}>
            <h4 className="text-center">Links</h4>
            <hr />
            <div className="d-flex flex-wrap gap-2">
              {badges.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="text-decoration-none"
                  passHref
                >
                  <CodBadge name={item.title} variant="danger" />
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
