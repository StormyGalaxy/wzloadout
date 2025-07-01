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
  title: 'Modern Warfare Remastered Equipment List | Lethal & Tactical Gear',
  description:
    'A complete guide to all lethal and tactical equipment in Call of Duty: Modern Warfare Remastered. Learn about Claymores, Stun Grenades, C4, and more to gain a tactical advantage.',
  keywords: [
    'Modern Warfare Remastered equipment',
    'MWR equipment',
    'MWR tactical equipment',
    'MWR lethal equipment',
    'COD MWR Claymore',
    'Modern Warfare Remastered Stun Grenade',
    'MWR C4',
    'MWR Frag grenade',
  ],
};

export default function ModernWarfareRemasteredEquipmentPage() {
  const breadcrumbLinks = [
    { href: '/modern-warfare/remastered', text: 'Modern Warfare Remastered' },
    { href: '/modern-warfare/remastered/info', text: 'Info Hub' },
    { text: 'Equipment' },
  ];

  return (
    <PageLayout containerClassName='theme-mwr'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare Remastered</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <EquipmentList game='modern-warfare-remastered' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
