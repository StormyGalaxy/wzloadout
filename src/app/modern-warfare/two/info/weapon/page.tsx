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
  title: 'Modern Warfare 2 Weapon Information',
  description: 'View information and all available attachments for the weapon in Modern Warfare 2.',
  keywords: [
    'COD Modern Warfare 2 RCG',
    'modern warfare 2 random class generator',
    'modern warfare 2',
    'modern warfare 2 rcg',
    'class generator',
    'modern warfare 2 rcg',
  ],
};

export default function ModernWarfareTwoWeaponPage() {
  const game = 'modern-warfare-two';

  return (
    <PageLayout containerClassName='theme-mw2'>
      <Container fluid>
        <Row>
          <Suspense
            fallback={
              <Col>
                <p className='text-center'>Loading page...</p>
              </Col>
            }>
            <WeaponDisplayClient game={game} link='modern-warfare/two' />
          </Suspense>
        </Row>
      </Container>
    </PageLayout>
  );
}
