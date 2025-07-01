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
  title: 'Modern Warfare Zombies (MWZ) Equipment Guide | All Lethal & Tactical',
  description:
    'Explore a complete guide to all lethal, tactical, and field upgrade equipment in Call of Duty: Modern Warfare Zombies (MWZ). Learn about the Cymbal Monkey, Kazimir Grenades, and more to survive the horde.',
  keywords: [
    'Modern Warfare Zombies equipment',
    'MWZ equipment',
    'MW3 Zombies equipment',
    'MWZ lethals',
    'MWZ tacticals',
    'COD MWZ field upgrades',
    'Cymbal Monkey',
    'LT53 Kazimir',
    'Molotov Cocktail MWZ',
  ],
};

export default function ModernWarfareThreeEquipmentPage() {
  const breadcrumbLinks = [
    { href: '/modern-warfare/three', text: 'Modern Warfare 3' },
    { href: '/modern-warfare/three/info', text: 'Info Hub' },
    { text: 'Zombies Equipment' },
  ];

  return (
    <PageLayout containerClassName='theme-mw3'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare 3</h2>
          <p className={styles.pageSubtitle}>Zombies Equipment</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <EquipmentList game='modern-warfare-three-zombies' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
