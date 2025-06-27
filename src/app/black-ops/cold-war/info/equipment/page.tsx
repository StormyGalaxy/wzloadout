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
  title: 'Cold War Equipment | Lethal, Tactical & Field Upgrades',
  description:
    'A full list of all equipment in Black Ops Cold War. View details on every piece of Lethal, Tactical, and Field Upgrade equipment to perfect your class setup.',
  keywords: [
    'Black Ops Cold War equipment',
    'BOCW equipment',
    'Cold War tactical',
    'Cold War lethal',
    'Cold War field upgrades',
    'Stimshot',
    'Stun Grenade',
    'C4',
    'Frag Grenade',
    'Trophy System',
  ],
};

export default function ColdWarEquipmentPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/cold-war', text: 'Black Ops Cold War' },
    { href: '/black-ops/cold-war/info', text: 'Info Hub' },
    { text: 'Equipment' },
  ];

  return (
    <PageLayout containerClassName='theme-cold-war'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops Cold War</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <EquipmentList game='cold-war' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
