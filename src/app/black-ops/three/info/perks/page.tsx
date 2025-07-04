import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import PerkList from '@/components/info/PerkList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 3 Perks | All Perk Tiers & Info',
  description:
    'Get a tactical advantage in Call of Duty: Black Ops 3. Explore a complete list of all multiplayer perks across all three tiers, with detailed descriptions for your Pick 10 class.',
  keywords: [
    'Black Ops 3 perks',
    'BO3 perks',
    'Call of Duty Black Ops 3 perks',
    'BO3 multiplayer perks',
    'All BO3 perks',
    'Black Ops 3 perk list',
    'BO3 perk guide',
    'Pick 10 system',
  ],
};
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

export default function BlackOpsThreePerksPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/three', text: 'Black Ops 3' },
    { href: '/black-ops/three/info', text: 'Info Hub' },
    { text: 'Perks' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 3</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <PerkList game='black-ops-three' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
