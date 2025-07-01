import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import EquipmentList from '@/components/info/EquipmentList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare 3 Equipment',
  description: 'View all equipment in Modern Warfare 3.',
  keywords: [
    'COD Modern Warfare 3 RCG',
    'modern warfare three random class generator',
    'modern warfare three',
    'modern warfare three rcg',
    'class generator',
  ],
};

export default function ModernWarfareThreeEquipmentPage() {
  return (
    <PageLayout containerClassName='theme-mw3'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare 3</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <EquipmentList game='modern-warfare-three' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
