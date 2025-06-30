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
  title: 'World at War Perks | All Tiers & Vehicle Perks',
  description:
    'Get a tactical advantage in Call of Duty: World at War. Explore a complete list of all multiplayer perks across all three tiers, plus the unique Vehicle Perks.',
  keywords: [
    'World at War perks',
    'WaW perks',
    'Call of Duty World at War perks',
    'WaW multiplayer perks',
    'All WaW perks',
    'World at War perk list',
    'WaW perk guide',
    'WaW vehicle perks',
  ],
};

export default function WorldAtWarPerksPage() {
  const breadcrumbLinks = [
    { href: '/world-at-war', text: 'World At War' },
    { href: '/world-at-war/info', text: 'Info Hub' },
    { text: 'Perks' },
  ];

  return (
    <PageLayout containerClassName='theme-waw'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>World At War</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <PerkList game='world-at-war' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
