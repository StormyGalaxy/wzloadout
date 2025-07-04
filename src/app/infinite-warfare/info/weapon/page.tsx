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
  title: 'Infinite Warfare Weapon Information',
  description: 'View information and all available attachments for the weapon in Infinite Warfare.',
  keywords: [
    'COD Infinite Warfare RCG',
    'infinite warfare random class generator',
    'infinite warfare',
    'infinite warfare rcg',
    'class generator',
    'infinite warfare zombies',
    'infinite warfare rcg',
  ],
};

export default function InfiniteWarfareWeaponPage() {
  const game = 'infinite-warfare';

  return (
    <PageLayout containerClassName='theme-infinite-warfare'>
      <Container fluid>
        <Row>
          <Suspense
            fallback={
              <Col>
                <p className='text-center'>Loading page...</p>
              </Col>
            }>
            <WeaponDisplayClient game={game} link='infinite-warfare' textOutline={true} />
          </Suspense>
        </Row>
      </Container>
    </PageLayout>
  );
}
