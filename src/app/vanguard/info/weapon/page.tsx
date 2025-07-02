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
  title: 'Vanguard Weapon Information',
  description: 'View information and all available attachments for the weapon in Vanguard.',
  keywords: [
    'COD Vanguard RCG',
    'vanguard random class generator',
    'vanguard',
    'vanguard rcg',
    'class generator',
    'vanguard zombies',
    'vanguard rcg',
  ],
};

export default function VanguardWeaponPage() {
  const game = 'vanguard';

  return (
    <PageLayout containerClassName='theme-vanguard'>
      <Container fluid>
        <Row>
          <Suspense
            fallback={
              <Col>
                <p className='text-center'>Loading page...</p>
              </Col>
            }>
            <WeaponDisplayClient game={game} link='vanguard' />
          </Suspense>
        </Row>
      </Container>
    </PageLayout>
  );
}
