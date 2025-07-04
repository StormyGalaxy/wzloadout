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
  title: 'Black Ops 4 Equipment & Gear | Lethal, Tactical & Specialist',
  description:
    'A complete guide to all Equipment and Gear in Black Ops 4. View details on lethal grenades, tactical items, and unique Specialist-issued equipment.',
  keywords: [
    'Black Ops 4 equipment',
    'BO4 gear',
    'BO4 lethal equipment',
    'BO4 tactical equipment',
    'Specialist Equipment BO4',
    'Combat Axe',
    'Molotov Cocktail',
    'Concussion Grenade',
    'Trophy System',
    'Seeker',
  ],
};

export default function BlackOpsFourEquipmentPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/four', text: 'Black Ops 4' },
    { href: '/black-ops/four/info', text: 'Info Hub' },
    { text: 'Equipment' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 4</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <EquipmentList game='black-ops-four' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
