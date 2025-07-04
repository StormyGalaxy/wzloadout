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
  title: 'Modern Warfare Remastered Perks List & Guide | All Tiers',
  description:
    'Discover a complete list of all multiplayer perks available in Call of Duty: Modern Warfare Remastered. Learn about the effects of each perk across all three tiers to optimize your loadout and dominate the competition.',
  keywords: [
    'Modern Warfare Remastered perks',
    'MWR perks',
    'COD MWR perk list',
    'All MWR perks',
    'Stopping Power MWR',
    'Juggernaut MWR',
    'UAV Jammer',
    'Martyrdom',
    'Last Stand',
    'Modern Warfare Remastered perk tiers',
  ],
};

export default function ModernWarfareRemasteredPerksPage() {
  const breadcrumbLinks = [
    { href: '/modern-warfare/remastered', text: 'Modern Warfare Remastered' },
    { href: '/modern-warfare/remastered/info', text: 'Info Hub' },
    { text: 'Perks' },
  ];

  return (
    <PageLayout containerClassName='theme-mwr'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare Remastered</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <PerkList game='modern-warfare-remastered' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
