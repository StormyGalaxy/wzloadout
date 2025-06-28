import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import EquipmentList from '@/components/info/EquipmentList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 3 Equipment',
  description: 'View all equipment in Black Ops 3.',
  keywords: [
    'COD Black Ops 3 RCG',
    'black ops three random class generator',
    'black ops three',
    'black ops three rcg',
    'class generator',
    'zombies',
    'treyarch zombies',
    'black ops three zombies',
    'black ops three rcg',
  ],
};

export default function BlackOpsThreeEquipmentPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 3</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <EquipmentList game='black-ops-three' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
