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
  title: 'Infinite Warfare Weapons | All Stats, Variants & Attachments',
  description:
    'Explore the complete futuristic arsenal of Call of Duty: Infinite Warfare. Get detailed stats, attachment lists, and information on all craftable weapon variants for every weapon class.',
  keywords: [
    'Infinite Warfare weapons',
    'IW weapons',
    'Call of Duty Infinite Warfare weapons',
    'IW weapon stats',
    'IW attachments',
    'Infinite Warfare weapon variants',
    'All IW weapons',
    'IW weapon list',
  ],
};

export default function InfiniteWarfareWeaponsPage() {
  const dataKeys = ['name', 'type', 'game', 'no_attach', 'no_attach_info'];
  const breadcrumbLinks = [
    { href: '/infinite-warfare', text: 'Infinite Warfare' },
    { href: '/infinite-warfare/info', text: 'Info Hub' },
    { text: 'Weapons' },
  ];

  return (
    <PageLayout containerClassName='theme-infinite-warfare'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Infinite Warfare</h2>
          <p className={styles.pageSubtitle}>Weapons</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} textOutline={true} className='mb-4' />
            <WeaponList game='infinite-warfare' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
