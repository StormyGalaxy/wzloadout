// --- React ---
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
  title: 'Call of Duty: WW2 Equipment List | Lethal & Tactical Gear',
  description:
    'A complete guide to all lethal and tactical equipment in Call of Duty: WW2 multiplayer. Learn about the M18 Smoke Grenade, British No. 69, Bouncing Betty, and more to gain a tactical advantage.',
  keywords: [
    'Call of Duty WW2 equipment',
    'COD WW2 equipment',
    'WW2 lethal equipment',
    'WW2 tactical equipment',
    'WW2 equipment list',
    'M18 Smoke Grenade',
    'British No. 69',
    'Bouncing Betty',
    'Sticky Bomb',
  ],
};

export default function WorldWarTwoEquipmentPage() {
  const breadcrumbLinks = [
    { href: '/world-war-two', text: 'World War 2' },
    { href: '/world-war-two/info', text: 'Info Hub' },
    { text: 'Equipment' },
  ];

  return (
    <PageLayout containerClassName='theme-ww2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>World War 2</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <EquipmentList game='world-war-two' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
