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
  title: 'Infinite Warfare Perks | All Perk Tiers & Info',
  description:
    'Get a tactical advantage in Call of Duty: Infinite Warfare. Explore a complete list of all multiplayer perks across all three tiers, with detailed descriptions of their effects.',
  keywords: [
    'Infinite Warfare perks',
    'IW perks',
    'Call of Duty Infinite Warfare perks',
    'IW multiplayer perks',
    'All IW perks',
    'Infinite Warfare perk list',
    'IW perk guide',
    'IW loadouts',
  ],
};

export default function InfiniteWarfarePerksPage() {
  const breadcrumbLinks = [
    { href: '/infinite-warfare', text: 'Infinite Warfare' },
    { href: '/infinite-warfare/info', text: 'Info Hub' },
    { text: 'Perks' },
  ];

  return (
    <PageLayout containerClassName='theme-infinite-warfare'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Infinite Warfare</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} textOutline={true} className='mb-4' />
            <PerkList game='infinite-warfare' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
