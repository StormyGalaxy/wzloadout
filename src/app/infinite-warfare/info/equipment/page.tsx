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
  title: 'Infinite Warfare Equipment | Lethal & Tactical',
  description:
    'View a complete list of all multiplayer equipment in Call of Duty: Infinite Warfare. Get details on every Lethal and Tactical grenade and device to complete your loadout.',
  keywords: [
    'Infinite Warfare equipment',
    'IW equipment',
    'Call of Duty Infinite Warfare equipment',
    'IW lethal equipment',
    'IW tactical grenades',
    'All IW equipment',
    'Infinite Warfare loadouts',
  ],
};

export default function InfiniteWarfareEquipmentPage() {
  const breadcrumbLinks = [
    { href: '/infinite-warfare', text: 'Infinite Warfare' },
    { href: '/infinite-warfare/info', text: 'Info Hub' },
    { text: 'Equipment' },
  ];

  return (
    <PageLayout containerClassName='theme-infinite-warfare'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Infinite Warfare</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} textOutline={true} className='mb-4' />
            <EquipmentList game='infinite-warfare' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
