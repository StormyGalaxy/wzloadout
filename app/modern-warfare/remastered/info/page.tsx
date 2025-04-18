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
    "Spice up your COD Zombies gameplay! Generate unique random loadouts for Modern Warfare Remastered. Discover new weapons, perks, and gear combinations.",
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

const badges = [
  {
    title: "Equipment",
    link: "/modern-warfare/remastered/info/equipment",
  },
  {
    title: "Perks",
    link: "/modern-warfare/remastered/info/perks",
  },
  {
    title: "Weapons",
    link: "/modern-warfare/remastered/info/weapons",
  },
];

export default function ModernWarfareRemasteredInfoPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName="mwr">
      <Container>
        <h2 className="text-center mb-4">
          Modern Warfare Remastered
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Loadout Information
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col lg={7} className="text-center">
            <p>
              Relive a groundbreaking era of Call of Duty with our resources for
              Modern Warfare Remastered. This section brings you the essential
              details for the remastered classic that defined modern online
              combat. Find comprehensive lists and stats for all the iconic{" "}
              <strong>Weapons</strong>, tactical <strong>Equipment</strong>, and
              game-changing <strong>Perks</strong> available in multiplayer. Use
              the links on this page to master the arsenal of the original
              Modern Warfare.
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
                  <CodBadge name={item.title} variant="success" />
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
