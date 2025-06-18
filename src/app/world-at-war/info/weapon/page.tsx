import { Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WeaponDisplayClient from '@/components/info/WeaponDisplayClient';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'World At War Weapons',
  description: 'View information and all available attachments for the weapon in World At War.',
  keywords: [
    'COD World At War RCG',
    'COD WAW RCG',
    'waw random class generator',
    'waw',
    'world at war',
    'world at war rcg',
    'world at war random class generator',
    'class generator',
    'zombies',
    'world at war zombies',
    'world at war zombies',
    'world at war rcg',
    'world at war random class generator',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/world-at-war/generator' },

  { label: 'Loadout Info', href: '/world-at-war/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function WorldAtWarWeaponPage() {
  const game = 'world-at-war';

  return (
    <PageLayout navLinks={navLinks} headerClassName='waw'>
      <Container fluid>
        <Row>
          <Suspense
            fallback={
              <Col>
                <p className='text-center'>Loading page...</p>
              </Col>
            }>
            <WeaponDisplayClient game={game} />
          </Suspense>
        </Row>
      </Container>
    </PageLayout>
  );
}
