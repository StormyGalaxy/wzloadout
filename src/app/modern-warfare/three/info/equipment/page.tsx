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
  title: 'Modern Warfare 3 (2023) Equipment Guide | Lethal & Tactical',
  description:
    'Explore a complete list of all lethal and tactical equipment available in Call of Duty: Modern Warfare 3 (2023). Learn about Breacher Drones, Flash Grenades, Thermobaric Grenades, and more to get a tactical edge.',
  keywords: [
    'Modern Warfare 3 equipment',
    'MW3 equipment',
    'MW3 tactical equipment',
    'MW3 lethal equipment',
    'COD MW3 Breacher Drone',
    'Modern Warfare 3 Flash Grenade',
    'MW3 Thermobaric Grenade',
    'MW3 EMD Grenade',
  ],
};

export default function ModernWarfareThreeEquipmentPage() {
  const breadcrumbLinks = [
    { href: '/modern-warfare/three', text: 'Modern Warfare 3' },
    { href: '/modern-warfare/three/info', text: 'Info Hub' },
    { text: 'Equipment' },
  ];

  return (
    <PageLayout containerClassName='theme-mw3'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare 3</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <EquipmentList game='modern-warfare-three' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
