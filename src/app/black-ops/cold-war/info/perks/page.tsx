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
  title: 'Black Ops Cold War Perks | All Perks',
  description:
    'A complete guide to all multiplayer perks in Black Ops Cold War. See what each perk does across all three tiers to build your perfect class.',
  keywords: [
    'Black Ops Cold War perks',
    'BOCW perks',
    'all cold war perks',
    'perk tier 1',
    'perk tier 2',
    'perk tier 3',
    'best perks cold war',
    'Perk Greed',
  ],
};

export default function ColdWarPerksPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/cold-war', text: 'Black Ops Cold War' },
    { href: '/black-ops/cold-war/info', text: 'Info Hub' },
    { text: 'Perks' },
  ];

  return (
    <PageLayout containerClassName='theme-cold-war'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops Cold War</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <PerkList game='cold-war' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
