import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ZombiesFieldUpgradeList from '@/components/info/ZombiesFieldUpgradeList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Cold War Zombies Field Upgrades | All Abilities & Tiers',
  description:
    'A complete guide to all Zombies Field Upgrades in Black Ops Cold War. Learn what each ability does and see the powerful effects of each upgrade tier.',
  keywords: [
    'Black Ops Cold War Zombies field upgrades',
    'BOCW zombies field upgrades',
    'Cold War zombies abilities',
    'Ring of Fire',
    'Aether Shroud',
    'Frenzied Guard',
    'Healing Aura',
    'Frost Blast',
    'Energy Mine',
    'best field upgrade cold war zombies',
    'treyarch zombies',
  ],
};

export default function ColdWarZombiesFieldUpgradesPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/cold-war', text: 'Black Ops Cold War' },
    { href: '/black-ops/cold-war/info', text: 'Info Hub' },
    { text: 'Zombies Field Upgrades' },
  ];

  return (
    <PageLayout containerClassName='theme-cold-war'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops Cold War</h2>
          <p className={styles.pageSubtitle}>Zombies Field Upgrades</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ZombiesFieldUpgradeList game='cold-war' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
