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
    "Spice up your COD gameplay! Generate unique random loadouts for Call of Duty Warzone. Discover new weapons, perks, and gear combinations.",
  keywords: [
    "COD Warzone RCG",
    "warzone random class generator",
    "warzone",
    "warzone rcg",
    "warzone random class generator",
    "class generator",
    "warzone rcg",
    "warzone random class generator",
    "black ops 6",
    "modern warfare 3",
    "modern warfare 2",
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Generator", href: "/warzone/generator" },
  { label: "Where We Droppin?", href: "/warzone/where-we-droppin" },
  { label: "Loadout Info", href: "/warzone/info" },
  { label: "Changelog", href: "/changelog" },
];

const badges = [
  {
    title: "Equipment",
    link: "/warzone/info/equipment",
  },
  {
    title: "Perks",
    link: "/warzone/info/perks",
  },
  {
    title: "Weapons",
    link: "/warzone/info/weapons",
  },
  {
    title: "Wildcards",
    link: "/warzone/info/wildcards",
  },
];

export default function WarzoneInfoPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName="warzone">
      <Container>
        <h2 className="text-center mb-4">
          Warzone
          <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
          <br className="d-block d-sm-none" />
          Loadout Information
        </h2>
        <Row className="shadow-lg p-3 bg-body rounded mb-4">
          <Col lg={7} className="text-center">
            <p>
              Drop into the massive battle royale arenas of Call of Duty:
              Warzone fully prepared with our tactical guide. This section
              provides crucial intel for survival and victory across Warzone's
              ever-evolving battlegrounds. Explore detailed information on the
              meta <strong>Weapons</strong>, essential <strong>Perks</strong>,
              powerful <strong>Wildcards</strong> to enhance your loadouts,
              vital tactical and lethal <strong>Equipment</strong>, and
              strategic breakdowns of key <strong>Drop Spots</strong> across all
              current Warzone maps. Use the links on this page to gear up, plan
              your drop, and dominate your next match.
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
