// --- React ---
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
  title: 'World War 2 Weapon Information',
  description: 'View information and all available attachments for the weapon in World War 2.',
  keywords: [
    'COD World War 2 RCG',
    'world war 2 random class generator',
    'world war 2',
    'world war 2 rcg',
    'class generator',
    'world war 2 zombies',
    'world war 2 rcg',
  ],
};

export default function WorldWarTwoWeaponPage() {
  const game = 'world-war-two';

  return (
    <PageLayout containerClassName='theme-ww2'>
      <Container fluid>
        <Row>
          <Suspense
            fallback={
              <Col>
                <p className='text-center'>Loading page...</p>
              </Col>
            }>
            <WeaponDisplayClient game={game} link='world-war-two' />
          </Suspense>
        </Row>
      </Container>
    </PageLayout>
  );
}
