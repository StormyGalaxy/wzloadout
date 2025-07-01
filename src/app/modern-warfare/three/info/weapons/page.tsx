import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WeaponList from '@/components/info/WeaponList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare 3 (2023) Weapon Stats & Info | All Guns',
  description:
    'Explore a complete database of all primary and secondary weapons in Call of Duty: Modern Warfare 3 (2023). View detailed stats, available attachments, and information for every assault rifle, SMG, sniper, and more.',
  keywords: [
    'Modern Warfare 3 weapons',
    'MW3 weapon stats',
    'COD MW3 guns',
    'All MW3 weapons',
    'Modern Warfare 3 attachments',
    'MCW',
    'Striker',
    'KATT-AMR',
    'SVA 545',
  ],
};

export default function ModernWarfareThreeWeaponsPage() {
  const dataKeys = ['name', 'type', 'game', 'no_attach', 'no_attach_info', 'isDlc'];
  const breadcrumbLinks = [
    { href: '/modern-warfare/three', text: 'Modern Warfare 3' },
    { href: '/modern-warfare/three/info', text: 'Info Hub' },
    { text: 'Weapons' },
  ];

  return (
    <PageLayout containerClassName='theme-mw3'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare 3</h2>
          <p className={styles.pageSubtitle}>Weapons</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WeaponList
              game='modern-warfare-three'
              dataKeys={dataKeys}
              link={'modern-warfare/three'}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
