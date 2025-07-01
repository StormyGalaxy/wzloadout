import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import EquipmentList from '@/components/info/EquipmentList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare Two Equipment',
  description: 'View all equipment in Modern Warfare Two.',
  keywords: [
    'COD Modern Warfare Two RCG',
    'modern warfare two random class generator',
    'modern warfare two',
    'modern warfare two rcg',
    'class generator',
  ],
};

export default function ModernWarfareTwoEquipmentPage() {
  return (
    <PageLayout containerClassName='theme-mw2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare Two</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <EquipmentList game='modern-warfare-two' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
