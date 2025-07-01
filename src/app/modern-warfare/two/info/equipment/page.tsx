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
  title: 'Modern Warfare 2 (2022) Equipment Guide | Lethal & Tactical',
  description:
    'Explore a complete list of all lethal and tactical equipment available in Call of Duty: Modern Warfare 2 (2022). Learn about Semtex, Flash Grenades, Drill Charges, and more to get a tactical edge.',
  keywords: [
    'Modern Warfare 2 equipment',
    'MW2 equipment',
    'MW2 tactical equipment',
    'MW2 lethal equipment',
    'COD MW2 Drill Charge',
    'Modern Warfare 2 Flash Grenade',
    'MW2 Semtex',
    'MW2 Shock Stick',
  ],
};

export default function ModernWarfareTwoEquipmentPage() {
  const breadcrumbLinks = [
    { href: '/modern-warfare/two', text: 'Modern Warfare 2' },
    { href: '/modern-warfare/two/info', text: 'Info Hub' },
    { text: 'Equipment' },
  ];

  return (
    <PageLayout containerClassName='theme-mw2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare 2</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <EquipmentList game='modern-warfare-two' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
