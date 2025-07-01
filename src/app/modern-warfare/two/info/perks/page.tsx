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
  title: 'Modern Warfare 2 (2022) Perks List & Guide | All Perk Packages',
  description:
    'Discover a complete list of all multiplayer perks in Call of Duty: Modern Warfare 2 (2022). Learn about Base, Bonus, and Ultimate perks to create the best Perk Packages for your loadout.',
  keywords: [
    'Modern Warfare 2 perks',
    'MW2 perks',
    'COD MW2 perk packages',
    'All MW2 perks',
    'Double Time',
    'Fast Hands',
    'Ghost MW2',
    'Birds-Eye',
    'Overclock',
    'Modern Warfare 2 perk list',
  ],
};

export default function ModernWarfareTwoPerksPage() {
  const breadcrumbLinks = [
    { href: '/modern-warfare/two', text: 'Modern Warfare 2' },
    { href: '/modern-warfare/two/info', text: 'Info Hub' },
    { text: 'Perks' },
  ];

  return (
    <PageLayout containerClassName='theme-mw2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare 2</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <PerkList game='modern-warfare-two' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
