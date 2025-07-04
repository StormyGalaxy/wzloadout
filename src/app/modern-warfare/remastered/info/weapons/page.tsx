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
  title: 'Modern Warfare Remastered Weapon Stats & Info | All Guns',
  description:
    'Explore a comprehensive database of all primary and secondary weapons in Call of Duty: Modern Warfare Remastered. View detailed stats, available attachments, and information for every assault rifle, SMG, sniper, and more.',
  keywords: [
    'Modern Warfare Remastered weapons',
    'MWR weapon stats',
    'COD MWR guns',
    'All MWR weapons',
    'Modern Warfare Remastered attachments',
    'M4 Carbine stats',
    'AK-47 MWR',
    'Barrett .50cal stats',
    'Desert Eagle MWR',
  ],
};

export default function ModernWarfareRemasteredWeaponsPage() {
  const dataKeys = ['name', 'type', 'game', 'no_attach', 'no_attach_info', 'isDlc'];
  const breadcrumbLinks = [
    { href: '/modern-warfare/remastered', text: 'Modern Warfare Remastered' },
    { href: '/modern-warfare/remastered/info', text: 'Info Hub' },
    { text: 'Weapons' },
  ];

  return (
    <PageLayout containerClassName='theme-mwr'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare Remastered</h2>
          <p className={styles.pageSubtitle}>Weapons</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WeaponList
              game='modern-warfare-remastered'
              dataKeys={dataKeys}
              link={'modern-warfare/remastered'}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
