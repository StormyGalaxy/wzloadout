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
  title: 'Call of Duty: Vanguard Perks List & Guide | All Tiers',
  description:
    'Discover a complete list of all multiplayer perks available in Call of Duty: Vanguard. Learn about the effects of each perk across all three tiers to optimize your loadout and dominate the competition.',
  keywords: [
    'Call of Duty Vanguard perks',
    'COD Vanguard perks',
    'Vanguard perk list',
    'All Vanguard perks',
    'Ghost',
    'Ninja',
    'High Alert',
    'Overkill',
    'Double Time',
    'Vanguard loadouts',
  ],
};

export default function VanguardPerksPage() {
  const breadcrumbLinks = [
    { href: '/vanguard', text: 'Vanguard' },
    { href: '/vanguard/info', text: 'Info Hub' },
    { text: 'Perks' },
  ];

  return (
    <PageLayout containerClassName='theme-vanguard'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Vanguard</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <PerkList game='vanguard' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
