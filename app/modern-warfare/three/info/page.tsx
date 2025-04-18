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
    "Spice up your COD gameplay! Generate unique random loadouts for Modern Warfare Three. Discover new weapons, perks, and gear combinations.",
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

const badges = [
  {
    title: "Equipment",
    link: "/modern-warfare/three/info/equipment",
  },
  {
    title: "Perks",
    link: "/modern-warfare/three/info/perks",
  },
  {
    title: "Streaks",
    link: "/modern-warfare/three/info/streaks",
  },
  {
    title: "Weapons",
    link: "/modern-warfare/three/info/weapons",
  },
  {
    title: "Zombies - Equipment",
    link: "/modern-warfare/three/info/zombies/equipment",
  },
];

export default function ModernWarfareThreeInfoPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName="modern-warfare">
      <Container>
        <h2 className="text-center mb-4">
          Modern Warfare Three
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Loadout Information
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col lg={7} className="text-center">
            <p>
              Continue the fight in Call of Duty: Modern Warfare III [2023] with
              our detailed information hub. This section covers everything you
              need for both Multiplayer and the open-world Zombies experience.
              Fine-tune your Multiplayer loadout with data on all{" "}
              <strong>Weapons</strong>, tactical and lethal{" "}
              <strong>Equipment</strong>, game-altering <strong>Perks</strong>{" "}
              provided by the Vest and Gear system, and powerful{" "}
              <strong>Killstreaks</strong>. Plus, dive into our comprehensive{" "}
              <strong>Modern Warfare Zombies (MWZ) information</strong>,
              covering missions, acquisitions, schematics, map details, and
              survival tips for the Urzikstan exclusion zone. Find all the
              essential links on this page.
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
