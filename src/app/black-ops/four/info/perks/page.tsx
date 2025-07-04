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
  title: 'Black Ops 4 Perks Information',
  description:
    'Explore a complete list of all Multiplayer perks in Call of Duty: Black Ops 4. Learn about the abilities and advantages each perk provides to customize your loadout.',
  keywords: [
    'Black Ops 4 Perks',
    'COD Black Ops 4 Perks',
    'black ops 4 multiplayer perks',
    'black ops 4 zombies perks',
    'all perks black ops 4',
    'perk list',
    'best perks bo4',
    'Scavenger',
    'Engineer',
    'Flak Jacket',
    'Tactical Mask',
    'Lightweight',
    'Skulker',
    'Cold Blooded',
    'Gung-Ho',
    'Dexterity',
    'Ghost',
    'Team Link',
    'Dead Silence',
    'Tracker',
  ],
};

export default function BlackOpsFourPerksPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/four', text: 'Black Ops 4' },
    { href: '/black-ops/four/info', text: 'Info Hub' },
    { text: 'Perks' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 4</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <PerkList game='black-ops-four' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
