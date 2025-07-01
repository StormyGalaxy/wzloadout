import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import StreakList from '@/components/info/StreakList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare 3 Streaks',
  description: 'View all streaks in Modern Warfare 3.',
  keywords: [
    'COD Modern Warfare 3 RCG',
    'modern warfare three random class generator',
    'modern warfare three',
    'modern warfare three rcg',
    'class generator',
  ],
};

export default function ModernWarfareThreeStreaksPage() {
  return (
    <PageLayout containerClassName='theme-mw3'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare 3</h2>
          <p className={styles.pageSubtitle}>Streaks</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <StreakList game='modern-warfare-three' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
