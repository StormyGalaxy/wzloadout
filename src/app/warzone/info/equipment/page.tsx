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
  title: 'Warzone Equipment Guide | Best Lethal & Tactical Gear',
  description:
    'A complete guide to all lethal and tactical equipment in Call of Duty: Warzone. Learn about the best equipment to use for your loadout, including Semtex, Throwing Knives, Stun Grenades, and more.',
  keywords: [
    'Warzone equipment',
    'Warzone tactical equipment',
    'Warzone lethal equipment',
    'Best Warzone equipment',
    'COD Warzone',
    'Semtex',
    'Throwing Knife',
    'Stun Grenade',
    'Smoke Grenade',
    'Warzone loadouts',
  ],
};

export default function WarzoneEquipmentPage() {
  const breadcrumbLinks = [
    { href: '/warzone', text: 'Warzone' },
    { href: '/warzone/info', text: 'Info Hub' },
    { text: 'Equipment' },
  ];

  return (
    <PageLayout containerClassName='theme-warzone'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Warzone</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <EquipmentList game='warzone' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
