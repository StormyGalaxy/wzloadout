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
  title: 'Warzone Weapon Information',
  description: 'View information and all available attachments for the weapon in Warzone.',
  keywords: [
    'COD Warzone RCG',
    'warzone random class generator',
    'warzone',
    'warzone rcg',
    'class generator',
    'warzone zombies',
    'warzone rcg',
    'black-ops-6',
    'Modern Warfare 3',
    'Modern Warfare 2',
  ],
};

export default function WarzoneWeaponPage() {
  const game = 'warzone';

  return (
    <PageLayout containerClassName='theme-warzone'>
      <Container fluid>
        <Row>
          <Suspense
            fallback={
              <Col>
                <p className='text-center'>Loading page...</p>
              </Col>
            }>
            <WeaponDisplayClient game={game} link='warzone' />
          </Suspense>
        </Row>
      </Container>
    </PageLayout>
  );
}
