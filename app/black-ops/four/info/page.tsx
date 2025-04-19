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
    "Spice up your COD gameplay! Generate unique random loadouts for Call of Duty Black Ops Four. Discover new weapons, perks, and gear combinations.",
  keywords: [
    "COD Black Ops Four RCG",
    "black ops four random class generator",
    "black ops four",
    "black ops four rcg",
    "class generator",
    "zombies",
    "treyarch zombies",
    "black ops four zombies",
    "black ops four rcg",
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Multiplayer Generator", href: "/black-ops/four/generator" },
  { label: "Zombies Generator", href: "/black-ops/four/zombies/generator" },
  {
    label: "Zombies Custom Mutations",
    href: "/black-ops/four/zombies/custom-mutations",
  },
  { label: "Loadout Info", href: "/black-ops/four/info" },
  { label: "Changelog", href: "/changelog" },
];

const badges = [
  {
    title: "Equipment",
    link: "/black-ops/four/info/equipment",
  },
  {
    title: "Perks",
    link: "/black-ops/four/info/perks",
  },
  {
    title: "Specialists",
    link: "/black-ops/four/info/specialists",
  },
  {
    title: "Streaks",
    link: "/black-ops/four/info/streaks",
  },
  {
    title: "Weapons",
    link: "/black-ops/four/info/weapons",
  },
  {
    title: "Wildcards",
    link: "/black-ops/four/info/wildcards",
  },
  {
    title: "Zombies - Elixers",
    link: "/black-ops/four/info/zombies/elixers",
  },
  {
    title: "Zombies - Maps",
    link: "/black-ops/four/info/zombies/maps",
  },
  {
    title: "Zombies - Perks",
    link: "/black-ops/four/info/zombies/perks",
  },
  {
    title: "Zombies - Talismans",
    link: "/black-ops/four/info/zombies/talismans",
  },
];

export default function BlackOpsFourInfoPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName="black-ops">
      <Container>
        <h2 className="text-center mb-4">
          Black Ops Four
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Loadout Information
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col lg={7} className="text-center">
            <p>
              Dive into the tactical multiplayer and rich Zombies universe of
              Call of Duty: Black Ops 4 with our comprehensive data hub. This
              section covers the core components of this unique title, known for
              its Specialist system and distinct gameplay mechanics. For
              Multiplayer, explore detailed stats on <strong>Weapons</strong>,
              essential <strong>Perks</strong>, powerful{" "}
              <strong>Specialists</strong> and their abilities, tactical{" "}
              <strong>Equipment</strong>, game-changing{" "}
              <strong>Wildcards</strong>, and devastating{" "}
              <strong>Scorestreaks</strong>. For Zombies fans, delve into the
              Chaos and Aether stories with guides on all <strong>Maps</strong>,
              classic <strong>Perks</strong>, consumable{" "}
              <strong>Elixirs</strong>, and persistent buff{" "}
              <strong>Talismans</strong>. Find all the links you need below.
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
                  <CodBadge name={item.title} badgeOverwrite="bgBlackOps" />
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
