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
  title: 'Warzone Weapon Stats & Info | All Guns from MW2, MW3 & BO6',
  description:
    'Explore a complete database of all primary and secondary weapons integrated into Call of Duty: Warzone from Modern Warfare II, Modern Warfare III, and Black Ops 6. View detailed stats, attachments, and meta-ranking information.',
  keywords: [
    'Warzone weapons',
    'Warzone weapon stats',
    'COD Warzone guns',
    'Best Warzone weapons',
    'Warzone meta',
    'All Warzone guns',
    'Black Ops 6 weapons',
    'Modern Warfare 3 guns',
    'MW2 guns',
    'Warzone attachments',
  ],
};

export default function WarzoneWeaponsPage() {
  const dataKeys = ['name', 'type', 'game', 'no_attach', 'no_attach_info', 'isDlc'];
  const breadcrumbLinks = [
    { href: '/warzone', text: 'Warzone' },
    { href: '/warzone/info', text: 'Info Hub' },
    { text: 'Weapons' },
  ];

  return (
    <PageLayout containerClassName='theme-warzone'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Warzone</h2>
          <p className={styles.pageSubtitle}>Weapons</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WeaponList game='warzone' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
