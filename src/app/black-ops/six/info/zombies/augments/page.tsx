import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ZombiesAugmentList from '@/components/info/ZombiesAugmentList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 6 Zombies Augments | All Tiers & Upgrades',
  description:
    'Customize your loadout in Call of Duty: Black Ops 6 Zombies. Get a complete guide to all Augments, which provide powerful upgrades for your Perks, Field Upgrades, and Ammo Mods.',
  keywords: [
    'Black Ops 6 Zombies Augments',
    'BO6 Zombies Augments',
    'Call of Duty Black Ops 6 Zombies',
    'BO6 Augments list',
    'all augments bo6',
    'zombies augments',
    'BO6 perk upgrades',
    'BO6 field upgrade augments',
  ],
};

export default function BlackOpsSixZombiesAugmentsPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/six', text: 'Black Ops 6' },
    { href: '/black-ops/six/info', text: 'Info Hub' },
    { text: 'Zombies Augments' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 6</h2>
          <p className={styles.pageSubtitle}>Zombies Augments</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ZombiesAugmentList game='black-ops-six-zombies' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
