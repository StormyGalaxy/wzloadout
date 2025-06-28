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
  title: 'Black Ops 3 Weapons',
  description: 'View information and all available attachments for the weapon in Black Ops 3.',
  keywords: [
    'COD Black Ops 3 RCG',
    'black ops three random class generator',
    'black ops three',
    'black ops three rcg',
    'class generator',
    'zombies',
    'treyarch zombies',
    'black ops three zombies',
    'black ops three rcg',
  ],
};

export default function BlackOpsThreeWeaponPage() {
  const game = 'black-ops-three';

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
