import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import EquipmentList from '@/components/info/EquipmentList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 3 Equipment | Lethal & Tactical',
  description:
    'Explore all the Lethal and Tactical equipment available in Call of Duty: Black Ops 3. Get details on every grenade and device to complete your Pick 10 class.',
  keywords: [
    'Black Ops 3 equipment',
    'BO3 equipment',
    'Call of Duty Black Ops 3 equipment',
    'BO3 lethal equipment',
    'BO3 tactical grenades',
    'All BO3 equipment',
    'Black Ops 3 Pick 10',
  ],
};

export default function BlackOpsThreeEquipmentPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/three', text: 'Black Ops 3' },
    { href: '/black-ops/three/info', text: 'Info Hub' },
    { text: 'Equipment' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 3</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <EquipmentList game='black-ops-three' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
