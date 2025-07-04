// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 7 Multiplayer & Zombies Generators',
  description:
    'Your hub for Call of Duty: Black Ops 7 tools. Generate random classes for multiplayer, create loadouts for round-based Zombies, and explore a complete info hub with details on weapons, perks, and more.',
  keywords: [
    'Black Ops 7',
    'BO7',
    'Black Ops 7 random class generator',
    'BO7 loadouts',
    'Black Ops 7 zombies generator',
    'Omnimovement',
    'round-based zombies',
    'BO7 info hub',
    'COD BO7 generator',
    'black ops seven rcg',
    'class generator',
    'zombies',
  ],
};

export default function BlackOpsSevenLandingPage() {
  const breadcrumbLinks = [{ text: 'Black Ops 7' }];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto text-center'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <h1>Prepare for Black Ops 7!</h1>
            <hr />
            <p>
              Get ready, Operator! As <strong>Call of Duty: Black Ops 7</strong> gears up for its{' '}
              <strong>Fall 2025 release</strong>, we&apos;re hard at work preparing your ultimate
              companion.
            </p>
            <p>We&apos;re building an essential hub for all things BO7, featuring:</p>
            <ul className='list-unstyled'>
              <li>
                <strong>Multiplayer Loadout Generator:</strong> Dominate the competition with
                expertly crafted, randomized loadouts tailored for any playstyle.
              </li>
              <li>
                <strong>Zombies Loadout Generator:</strong> Survive the horde with optimized
                loadouts for round-based Zombies, ensuring you&apos;re always prepared for the next
                wave.
              </li>
              <li>
                <strong>BO7 Intel Hub:</strong> Dive deep into the game&apos;s mechanics, weapons,
                perks, and more with our comprehensive information database.
              </li>
            </ul>
            <p>
              Stay tuned for updates as we get closer to launch! We&apos;re excited to help you
              conquer Black Ops 7.
            </p>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
