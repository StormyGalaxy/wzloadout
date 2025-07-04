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
  title: 'Modern Warfare 3 Weapon Information',
  description: 'View information and all available attachments for the weapon in Modern Warfare 3.',
  keywords: [
    'COD Modern Warfare 3 RCG',
    'modern warfare 3 random class generator',
    'modern warfare 3',
    'modern warfare 3 rcg',
    'class generator',
    'modern warfare 3 rcg',
  ],
};

export default function ModernWarfareThreeWeaponPage() {
  const game = 'modern-warfare-three';

  return (
    <PageLayout containerClassName='theme-mw3'>
      <Container fluid>
        <Row>
          <Suspense
            fallback={
              <Col>
                <p className='text-center'>Loading page...</p>
              </Col>
            }>
            <WeaponDisplayClient game={game} link='modern-warfare/three' />
          </Suspense>
        </Row>
      </Container>
    </PageLayout>
  );
}
