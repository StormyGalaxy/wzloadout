import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import ModernWarfareThreeZombiesLoadout from '@/components/generators/modern-warfare/three/ModernWarfareThreeZombiesLoadout';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare Zombies',
  description:
    'Spice up your COD Zombies gameplay! Generate unique random loadouts for Modern Warfare 3. Discover new weapons, perks, and gear combinations.',
  keywords: [
    'COD Modern Warfare 3 RCG',
    'modern warfare three random class generator',
    'modern warfare three',
    'modern warfare three rcg',
    'class generator',
    'zombies',
    'Infinity Ward zombies',
    'modern warfare zombies',
  ],
};

export default function ModernWarfareThreeZombiesGeneratorPage() {
  return (
    <PageLayout containerClassName='theme-mw3'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare 3 Zombies</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <ModernWarfareThreeZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
