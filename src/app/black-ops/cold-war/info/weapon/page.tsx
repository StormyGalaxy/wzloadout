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
  title: 'Black Ops Cold War Weapon Information',
  description: 'View information and all available attachments for weapons in Black Ops Cold War.',
  keywords: [
    'Black Ops Cold War weapons',
    'BOCW weapon stats',
    'COD Cold War guns',
    'Cold War attachments',
  ],
};

export default function ColdWarWeaponPage() {
  const game = 'cold-war';

  return (
    <PageLayout containerClassName='theme-cold-war'>
      <Container fluid>
        <Row>
          <Suspense
            fallback={
              <Col>
                <p className='text-center'>Loading page...</p>
              </Col>
            }>
            <WeaponDisplayClient game={game} link='black-ops/cold-war' />
          </Suspense>
        </Row>
      </Container>
    </PageLayout>
  );
}
