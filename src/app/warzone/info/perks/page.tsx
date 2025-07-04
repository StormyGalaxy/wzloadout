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
  title: 'Warzone Perks Guide | All Perk Packages & Best Choices',
  description:
    'A complete guide to all perk packages and individual perks available in Call of Duty: Warzone. Learn about the best perks to use for your loadout, including selections from Modern Warfare II, Modern Warfare III, and Black Ops 6.',
  keywords: [
    'Warzone perks',
    'Warzone perk packages',
    'Best Warzone perks',
    'COD Warzone perks',
    'Warzone meta perks',
    'High Alert',
    'Ghost',
    'Double Time',
    'Fast Hands',
    'Warzone loadouts',
  ],
};

export default function WarzonePerksPage() {
  const dataKeys = ['name', 'type', 'game', 'isDlc'];
  const breadcrumbLinks = [
    { href: '/warzone', text: 'Warzone' },
    { href: '/warzone/info', text: 'Info Hub' },
    { text: 'Perks' },
  ];

  return (
    <PageLayout containerClassName='theme-warzone'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Warzone</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <PerkList game='warzone' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
