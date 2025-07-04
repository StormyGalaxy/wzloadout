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
  title: 'Call of Duty: Vanguard Equipment List | Lethal & Tactical Gear',
  description:
    'A complete guide to all lethal and tactical equipment in Call of Duty: Vanguard multiplayer. Learn about the MK2 Frag Grenade, Stun Grenade, Gammon Bomb, and more to gain a tactical advantage.',
  keywords: [
    'Call of Duty Vanguard equipment',
    'COD Vanguard equipment',
    'Vanguard lethal equipment',
    'Vanguard tactical equipment',
    'Vanguard equipment list',
    'MK2 Frag Grenade',
    'Stun Grenade',
    'Gammon Bomb',
    'S-Mine 44',
  ],
};

export default function VanguardEquipmentPage() {
  const breadcrumbLinks = [
    { href: '/vanguard', text: 'Vanguard' },
    { href: '/vanguard/info', text: 'Info Hub' },
    { text: 'Equipment' },
  ];

  return (
    <PageLayout containerClassName='theme-vanguard'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Vanguard</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <EquipmentList game='vanguard' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
