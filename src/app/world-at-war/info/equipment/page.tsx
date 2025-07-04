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
  title: 'World at War Equipment | Lethal & Tactical Grenades',
  description:
    'View a complete list of all multiplayer equipment in Call of Duty: World at War. Get details on every Lethal and Tactical grenade to complete your loadout.',
  keywords: [
    'World at War equipment',
    'WaW equipment',
    'Call of Duty World at War equipment',
    'WaW lethal grenades',
    'WaW tactical grenades',
    'All WaW equipment',
    'Bouncing Betty',
    'Tabun Gas',
  ],
};

export default function WorldAtWarEquipmentPage() {
  const breadcrumbLinks = [
    { href: '/world-at-war', text: 'World At War' },
    { href: '/world-at-war/info', text: 'Info Hub' },
    { text: 'Equipment' },
  ];

  return (
    <PageLayout containerClassName='theme-waw'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>World At War</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <EquipmentList game='world-at-war' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
