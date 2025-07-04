import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ZombiesGobblegumList from '@/components/info/ZombiesGobblegumList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 4 Zombies Talismans',
  description:
    'View all Talismans in Call of Duty: Black Ops 4 Zombies. Learn how these rare, single-use items can provide powerful advantages at the start of a match.',
  keywords: [
    'Black Ops 4 Zombies Talismans',
    'BO4 Zombies Talismans',
    'COD Zombies Talismans',
    'Treyarch Zombies',
    'Zombies Talismans list',
    'what do talismans do',
    'how to get talismans',
    // Common Talismans
    'Common Talisman',
    'Starting Pistol',
    'Special Weapon',
    'Melee Weapon',
    // Rare Talismans
    'Rare Talisman',
    'First Perk',
    'First Door',
    'Mystery Box',
    'Shield',
    // Legendary Talismans
    'Legendary Talisman',
    'Pack-a-Punch',
    'Power-Up Drop',
    'Extra Life',
    // Epic Talismans
    'Epic Talisman',
    'Start with LMG',
    'Start with SMG',
    'Start with Assault Rifle',
    'Start with Tactical Rifle',
    'Start with Sniper Rifle',
    'Token of Superiority',
  ],
};

export default function BlackOpsFourZombiesTalismansPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/four', text: 'Black Ops 4' },
    { href: '/black-ops/four/info', text: 'Info Hub' },
    { text: 'Zombies Talismans' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 4</h2>
          <p className={styles.pageSubtitle}>Zombies Talismans</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ZombiesGobblegumList game='black-ops-four-zombies-talismans' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
