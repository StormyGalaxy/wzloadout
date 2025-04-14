import { Container, Row, Col } from "react-bootstrap";

import Link from "next/link";
// --- Components ---
import CodBadge from "@/components/CodBadge";
// --- Font Awesome ---
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrosshairs,
  faSkull,
  faParachuteBox,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
// --- Data ---
import generatorList from "@/json/index/generator-list.json";
import zombieGeneratorList from "@/json/index/zombie-generator-list.json";

export default function HomePage() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "COD RCG";

  return (
    <Container className="my-3">
      <Row className="shadow-lg p-3 bg-body rounded">
        <Col lg={7}>
          <h2 className="fw-bold mb-3 text-center">Welcome to {appName}!</h2>
          <p className="lh-lg text-center">
            Dive into <strong>{appName}</strong>, the{" "}
            <strong>ultimate random generator hub</strong> for Call of Duty
            fans! Created to add fun and unpredictability to your sessions, our
            site offers robust class generators for{" "}
            <em>every CoD game &ndash; past, present, and future</em>. Explore
            endless possibilities for{" "}
            <FontAwesomeIcon
              icon={faCrosshairs}
              className="icon-spacer"
              size="sm"
            />
            <strong>Multiplayer</strong>, generate surprising loadouts for{" "}
            <FontAwesomeIcon icon={faSkull} className="icon-spacer" />
            <strong>Zombies</strong>, and gear up for mayhem in{" "}
            <FontAwesomeIcon icon={faParachuteBox} className="icon-spacer" />
            <strong>Warzone</strong>. Looking for an extra layer of randomness?
            Let our generator pick your next{" "}
            <FontAwesomeIcon icon={faMapPin} className="icon-spacer" />
            <strong>Warzone drop zone</strong>! Built as a{" "}
            <strong>fully open-source project</strong>,{" "}
            <strong>{appName}</strong> is dedicated to{" "}
            <strong>shaking up your gameplay</strong> and keeping things
            exciting, <em>one random loadout at a time</em>.
          </p>
        </Col>
        <Col lg={5}>
          <h4 className="text-center">Multipler Generators</h4>
          <hr />
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {generatorList.map((item, index) => (
              <Link
                key={`gen-${index}`}
                href={item.link ?? ""}
                className="text-decoration-none"
                passHref
              >
                <CodBadge
                  name={item.title}
                  variant={item.variant}
                  badgeOverwrite={item.badgeOverwrite}
                  needsDarkText={item.textDark ? true : false}
                />
              </Link>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
