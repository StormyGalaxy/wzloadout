import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import PerkList from '@/components/info/PerkList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare 3 Perks',
  description: 'View all perks in Modern Warfare 3.',
  keywords: [
    'COD Modern Warfare 3 RCG',
    'modern warfare three random class generator',
    'modern warfare three',
    'modern warfare three rcg',
    'class generator',
  ],
};

export default function ModernWarfareThreePerksPage() {
  return (
    <PageLayout containerClassName='theme-mw3'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare 3</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <PerkList game='modern-warfare-three' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
