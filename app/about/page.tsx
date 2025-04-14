import { Container, Row, Col } from "react-bootstrap";
import type { Metadata } from "next";
// --- Font Awesome ---
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrosshairs,
  faSkull,
  faParachuteBox,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
//Helpers
import { generateGithubLink } from "@/helpers/_silabs/generateGithubLink";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "COD RCG";
  const githubLink = generateGithubLink(
    process.env.NEXT_PUBLIC_APP_GITHUB_OWNER,
    process.env.NEXT_PUBLIC_APP_GITHUB_REPO,
    { template: "feature-request-template.md" }
  );
  return (
    <Container className="main-content mt-3 mb-3">
      <Row className="shadow-lg mt-3 p-3 bg-body rounded">
        <h2 className="fw-bold mb-3 text-center">
          About {process.env.NEXT_PUBLIC_APP_NAME}
        </h2>
        <Col lg={8}>
          <p className="lead fs-6 lh-lg text-center">
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
          <h4>Tech used to build this site</h4>
          <div>
            <ul>
              <li>
                <a
                  href="https://github.com/SiloCityLabs/SiloCityPages"
                  target="_blank"
                >
                  SiloCityPages
                </a>
                {" - "} A framework by SiloCityLabs leveraging Bootstrap, React,
                and Next.js for efficient static site development. Deploy
                seamlessly to GitHub Pages.
              </li>
              <li>
                <a href="https://pages.github.com/" target="_blank">
                  GitHub Pages
                </a>
              </li>
              <li>
                <a href="https://nextjs.org/" target="_blank">
                  NextJs
                </a>
              </li>
              <li>
                <a href="https://react-bootstrap.netlify.app/" target="_blank">
                  React Bootstrap
                </a>
              </li>
              <li>
                <a href="https://git-scm.com/" target="_blank">
                  Git
                </a>
                {" - "} Version control software
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={4}>
          <h4>Contact Us</h4>
          <p>
            Have you found a bug, an error or just havea cool feature we should
            add to the site? Create a ticket on our Github{" "}
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              here
            </a>{" "}
            and we will look into it!
          </p>
        </Col>
      </Row>
    </Container>
  );
}
