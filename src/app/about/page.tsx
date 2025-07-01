import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs, faSkull, faParachuteBox, faMapPin } from '@fortawesome/free-solid-svg-icons';
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
            <FontAwesomeIcon icon={faCrosshairs} size='2x' className='text-primary mb-3' />
            <h4 className='fw-semibold'>Multiplayer</h4>
            <p>Explore endless loadout possibilities for a fresh challenge every match.</p>
          </Col>
          <Col md={3} className='text-center mb-4'>
            <FontAwesomeIcon icon={faSkull} size='2x' className='text-danger mb-3' />
            <h4 className='fw-semibold'>Zombies</h4>
            <p>Generate surprising loadouts to survive the undead hordes.</p>
          </Col>
          <Col md={3} className='text-center mb-4'>
            <FontAwesomeIcon icon={faParachuteBox} size='2x' className='text-success mb-3' />
            <h4 className='fw-semibold'>Warzone</h4>
            <p>Gear up for mayhem with random loadouts and drop zones.</p>
          </Col>
          <Col md={3} className='text-center mb-4'>
            <FontAwesomeIcon icon={faMapPin} size='2x' className='text-info mb-3' />
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
          <Col md={12}>
            <h2 className='fw-bold mb-4 text-center'>Keeping Our Product Free with AI</h2>
            <p className='fs-6 lh-lg text-center'>
              To keep our services free for the community, we utilize AI to generate all our images.
              This approach allows us to minimize operational costs without compromising on a rich
              visual experience. We are committed to leveraging cutting-edge technology to provide a
              high-quality, accessible tool for all Call of Duty fans.
            </p>
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
