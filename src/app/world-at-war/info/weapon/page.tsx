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
  title: 'World At War Weapon Information',
  description: 'View information and all available attachments for the weapon in World At War.',
  keywords: [
    'COD World At War RCG',
    'world at war random class generator',
    'world at war',
    'world at war rcg',
    'class generator',
    'world at war zombies',
    'world at war rcg',
  ],
};

export default function WorldAtWarWeaponPage() {
  const game = 'world-at-war';

  return (
    <PageLayout containerClassName='theme-waw'>
      <Container fluid>
        <Row>
          <Suspense
            fallback={
              <Col>
                <p className='text-center'>Loading page...</p>
              </Col>
            }>
            <WeaponDisplayClient game={game} link='world-at-war' />
          </Suspense>
        </Row>
      </Container>
    </PageLayout>
  );
}
