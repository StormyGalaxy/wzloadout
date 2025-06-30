import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import EquipmentList from '@/components/info/EquipmentList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'World At War Equipment',
  description: 'View all equipment in World At War.',
  keywords: [
    'COD World At War RCG',
    'COD WAW RCG',
    'waw random class generator',
    'waw',
    'world at war',
    'world at war rcg',
    'world at war random class generator',
    'class generator',
    'zombies',
    'world at war zombies',
    'world at war zombies',
    'world at war rcg',
    'world at war random class generator',
  ],
};

export default function WorldAtWarEquipmentPage() {
  return (
    <PageLayout containerClassName='theme-waw'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>World At War</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <EquipmentList game='world-at-war' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
