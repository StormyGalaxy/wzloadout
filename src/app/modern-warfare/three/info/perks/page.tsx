import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import PerkList from '@/components/info/PerkList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare 3 (2023) Perks & Gear List | All Vests, Gloves & More',
  description:
    'Discover a complete list of all multiplayer perks and gear in Call of Duty: Modern Warfare 3 (2023). Learn about the effects of each Vest, Glove, Boot, and Gear item to optimize your loadout.',
  keywords: [
    'Modern Warfare 3 perks',
    'MW3 perks',
    'COD MW3 gear',
    'All MW3 perks',
    'Infantry Vest',
    'Covert Sneakers',
    'Ghost T/V Camo',
    'Bone Conduction Headset',
    'Modern Warfare 3 gear list',
  ],
};

export default function ModernWarfareThreePerksPage() {
  const breadcrumbLinks = [
    { href: '/modern-warfare/three', text: 'Modern Warfare 3' },
    { href: '/modern-warfare/three/info', text: 'Info Hub' },
    { text: 'Perks' },
  ];

  return (
    <PageLayout containerClassName='theme-mw3'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare 3</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <PerkList game='modern-warfare-three' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
