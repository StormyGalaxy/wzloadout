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
  title: 'Black Ops 4 Zombies Elixirs',
  description:
    'Discover all the Elixirs in Call of Duty: Black Ops 4 Zombies. Learn about the effects of each Elixir, from Classic to Epic, to gain an advantage in your next match.',
  keywords: [
    'Black Ops 4 Zombies Elixirs',
    'BO4 Zombies Elixirs',
    'COD Zombies Elixirs',
    'Treyarch Zombies',
    'Zombies Elixirs list',
    'best zombies elixirs',
    'Elixir crafting',
    // Classic Elixirs
    'Classic Elixir',
    'Anywhere But Here!',
    'Burned Out',
    'Nowhere But There',
    'Head Scan',
    // Common Elixirs
    'Common Elixir',
    'Aftertaste',
    'Always Done Swiftly',
    'Blood Debt',
    'Ctrl+Z',
    'Stock Option',
    'Newtonian Negation',
    // Rare Elixirs
    'Rare Elixir',
    'Alchemical Antithesis',
    'Anti-Entrapment',
    'Equip-Mint',
    'Kill-Joy',
    'Licensed Contractor',
    'Shields Up',
    'Temporal Gift',
    // Legendary Elixirs
    'Legendary Elixir',
    'Dead of Nuclear Winter',
    'Disorderly Combat',
    'Extra Credit',
    'Join the Party',
    'Power Keg',
    'Wall-to-Wall Clearance',
    // Epic Elixirs
    'Epic Elixir',
    'Crawlspace',
    'Fatal Contraption',
    'Idle Eyes',
    'In Plain Sight',
    'Perkaholic',
    'Point Drops',
    'Pop Shocks',
    'Quacknarok',
    'Reign Drops',
    'Shopping Free',
    "Who's Keeping Score",
  ],
};

export default function BlackOpsFourZombiesElixersPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/four', text: 'Black Ops 4' },
    { href: '/black-ops/four/info', text: 'Info Hub' },
    { text: 'Zombies Elixers' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 4</h2>
          <p className={styles.pageSubtitle}>Zombies Elixers</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ZombiesGobblegumList game='black-ops-four-zombies' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
