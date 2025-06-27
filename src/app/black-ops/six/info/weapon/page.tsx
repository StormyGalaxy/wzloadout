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
  title: 'Black Ops Six Weapon',
  description: 'View information and all available attachments for the weapon in Black Ops Six.',
  keywords: [
    'COD Black Ops Six RCG',
    'black ops six random class generator',
    'black ops six',
    'black ops six rcg',
    'class generator',
    'zombies',
    'treyarch zombies',
    'black ops six zombies',
    'black ops six rcg',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/black-ops/six/generator' },
  { label: 'Zombies Generator', href: '/black-ops/six/zombies-generator' },
  { label: 'Loadout Info', href: '/black-ops/six/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function BlackOpsSixWeaponPage() {
  const game = 'black-ops-six';

  return (
    <PageLayout containerClassName='theme-black-ops'>
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
