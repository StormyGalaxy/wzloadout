import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCrosshairs,
  faSkull,
  faParachuteBox,
  faMapPin,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
// --- Utils ---
import { generateGithubLink } from '@silocitypages/utils';

export const metadata: Metadata = {
  title: 'About COD RCG - The Ultimate Call of Duty Random Class Generator',
  description:
    'Learn about COD RCG, the ultimate random generator hub for Call of Duty fans. Discover our mission, the tech behind our site, and how we use AI to keep the product free.',
  keywords: [
    'Call of Duty',
    'Random Class Generator',
    'COD RCG',
    'About Us',
    'Modern Warfare',
    'Warzone',
    'Black Ops',
    'Zombies',
  ],
};

export default function AboutPage() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'COD RCG';
  const githubLink = generateGithubLink(
    process.env.NEXT_PUBLIC_APP_GITHUB_OWNER,
    process.env.NEXT_PUBLIC_APP_GITHUB_REPO,
    { template: 'feature-request-template.md' }
  );

  return (
    <PageLayout>
      <Container className='main-content my-5'>
        <Row className='justify-content-center text-center'>
          <Col md={8}>
            <h1 className='display-4 fw-bold mb-4'>About {appName}</h1>
            <p className='lead fs-5 lh-lg'>
              Welcome to <strong>{appName}</strong>, your ultimate destination for Call of Duty
              random class generation. Our mission is to inject fun and unpredictability into your
              gaming sessions by providing robust generators for every CoD game—past, present, and
              future.
            </p>
          </Col>
        </Row>

        <Row className='shadow-sm mt-5 p-4 bg-light rounded'>
          <Col md={12}>
            <h2 className='fw-bold mb-4 text-center'>What We Offer</h2>
          </Col>
          <Col md={3} className='text-center mb-4'>
            <FontAwesomeIcon
              icon={faCrosshairs}
              style={{ width: '40px', height: '40px' }}
              className='text-primary mb-3'
            />
            <h4 className='fw-semibold'>Multiplayer</h4>
            <p>Explore endless loadout possibilities for a fresh challenge every match.</p>
          </Col>
          <Col md={3} className='text-center mb-4'>
            <FontAwesomeIcon
              icon={faSkull}
              style={{ width: '40px', height: '40px' }}
              className='text-danger mb-3'
            />
            <h4 className='fw-semibold'>Zombies</h4>
            <p>Generate surprising loadouts to survive the undead hordes.</p>
          </Col>
          <Col md={3} className='text-center mb-4'>
            <FontAwesomeIcon
              icon={faParachuteBox}
              style={{ width: '40px', height: '40px' }}
              className='text-success mb-3'
            />
            <h4 className='fw-semibold'>Warzone</h4>
            <p>Gear up for mayhem with random loadouts and drop zones.</p>
          </Col>
          <Col md={3} className='text-center mb-4'>
            <FontAwesomeIcon
              icon={faMapPin}
              style={{ width: '40px', height: '40px' }}
              className='text-info mb-3'
            />
            <h4 className='fw-semibold'>Drop Zones</h4>
            <p>
              Let fate decide your next landing spot in Warzone for an extra layer of randomness.
            </p>
          </Col>
        </Row>

        <Row className='mt-5 justify-content-center'>
          <Col md={8} className='text-center'>
            <h2 className='fw-bold mb-4'>Our Philosophy</h2>
            <p className='fs-5 lh-lg'>
              Built as a <strong>fully open-source project</strong>, {appName} is dedicated to
              shaking up your gameplay and keeping things exciting, one random loadout at a time. We
              believe in community-driven development and continuously improving our offerings based
              on your feedback.
            </p>
          </Col>
        </Row>

        <Row className='mt-5 bg-light rounded p-4'>
          <Col md={12} className='text-center'>
            <h2 className='fw-bold mb-4'>
              <FontAwesomeIcon
                icon={faTools}
                style={{ width: '40px', height: '40px' }}
                className='me-2'
              />
              Built With
            </h2>
            <p className='fs-6 lh-lg'>
              To keep our services free for the community, we utilize cutting-edge technology like
              AI to generate all our images. This approach minimizes operational costs without
              compromising on a rich visual experience. This site is built upon a foundation of
              powerful, modern tools:
            </p>
            <ul className='list-unstyled lh-lg'>
              <li>
                <a
                  href='https://github.com/SiloCityLabs/SiloCityPages'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <strong>SiloCityPages</strong>
                </a>
                : A framework by SiloCityLabs leveraging Bootstrap, React, and Next.js for efficient
                static site development.
              </li>
              <li>
                <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>
                  <strong>Next.js</strong>
                </a>
                : A React framework for building fast and scalable web applications.
              </li>
              <li>
                <a
                  href='https://react-bootstrap.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <strong>React Bootstrap</strong>
                </a>
                : The most popular front-end framework, rebuilt for React.
              </li>
              <li>
                <a href='https://pages.github.com/' target='_blank' rel='noopener noreferrer'>
                  <strong>GitHub Pages</strong>
                </a>
                : Websites for you and your projects, hosted directly from your GitHub repository.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className='mt-5 justify-content-center'>
          <Col md={8} className='text-center'>
            <h2 className='fw-bold mb-4'>Get Involved</h2>
            <p className='fs-5'>
              Have a bug to report, a feature to suggest, or just want to contribute? Create a
              ticket on our{' '}
              <a href={githubLink} target='_blank' rel='noopener noreferrer'>
                GitHub page
              </a>
              , and we&apos;ll look into it!
            </p>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
