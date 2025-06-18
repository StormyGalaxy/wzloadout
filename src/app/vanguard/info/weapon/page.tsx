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
  title: 'Vanguard Weapons',
  description: 'View information and all available attachments for the weapon in Vanguard.',
  keywords: [
    'COD Vanguard RCG',
    'vanguard random class generator',
    'vanguard',
    'vanguard rcg',
    'vanguard random class generator',
    'class generator',
    'zombies',
    'treyarch zombies',
    'vanguard zombies',
    'vanguard rcg',
    'vanguard random class generator',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/vanguard/generator' },
  { label: 'Zombies Generator', href: '/vanguard/zombies-generator' },
  { label: 'Loadout Info', href: '/vanguard/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function VanguardWeaponPage() {
  const game = 'vanguard';

  return (
    <PageLayout navLinks={navLinks} headerClassName='vanguard'>
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
