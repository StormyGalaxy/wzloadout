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
  title: 'Black Ops 6 Multiplayer Perks | All Perk Tiers & Info',
  description:
    'Get a tactical advantage in Call of Duty: Black Ops 6. Explore a complete list of all multiplayer perks across all three tiers, with detailed descriptions of their effects.',
  keywords: [
    'Black Ops 6 perks',
    'BO6 perks',
    'Call of Duty Black Ops 6 perks',
    'BO6 multiplayer perks',
    'All BO6 perks',
    'Black Ops 6 perk list',
    'BO6 perk guide',
  ],
};

export default function BlackOpsSixPerksPage() {
  const dataKeys = ['name', 'type', 'game', 'isDlc'];
  const breadcrumbLinks = [
    { href: '/black-ops/six', text: 'Black Ops 6' },
    { href: '/black-ops/six/info', text: 'Info Hub' },
    { text: 'Perks' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 6</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <PerkList game='black-ops-six' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
