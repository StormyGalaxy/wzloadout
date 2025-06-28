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
  title: 'Black Ops 4 Weapon Information',
  description: 'View information and all available attachments for the weapon in Black Ops 4.',
  keywords: [
    'COD Black Ops 4 RCG',
    'black ops four random class generator',
    'black ops four',
    'black ops four rcg',
    'class generator',
    'zombies',
    'treyarch zombies',
    'black ops four zombies',
    'black ops four rcg',
  ],
};

export default function BlackOpsFourWeaponPage() {
  const game = 'black-ops-four';

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
            <WeaponDisplayClient game={game} link='black-ops/four' />
          </Suspense>
        </Row>
      </Container>
    </PageLayout>
  );
}
