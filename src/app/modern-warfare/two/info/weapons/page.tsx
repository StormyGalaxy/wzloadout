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
  title: 'Modern Warfare II (2022) Weapon Stats & Info | All Guns',
  description:
    'Explore a complete database of all primary and secondary weapons in Call of Duty: Modern Warfare II (2022). View detailed stats, available attachments, and information for every assault rifle, SMG, sniper, and more.',
  keywords: [
    'Modern Warfare II weapons',
    'MW2 weapon stats',
    'COD MW2 guns',
    'All MW2 weapons',
    'Modern Warfare 2 attachments',
    'M4 MW2',
    'Kastov 762',
    'Vaznev-9K',
    'SP-X 80',
  ],
};

export default function ModernWarfareTwoWeaponsPage() {
  const dataKeys = ['name', 'type', 'game', 'no_attach', 'no_attach_info', 'isDlc'];
  const breadcrumbLinks = [
    { href: '/modern-warfare/two', text: 'Modern Warfare 2' },
    { href: '/modern-warfare/two/info', text: 'Info Hub' },
    { text: 'Weapons' },
  ];

  return (
    <PageLayout containerClassName='theme-mw2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare 2</h2>
          <p className={styles.pageSubtitle}>Weapons</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WeaponList game='modern-warfare-two' dataKeys={dataKeys} link={'modern-warfare/two'} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
