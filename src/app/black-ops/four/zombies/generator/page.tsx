import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import BlackOpsFourZombiesLoadout from '@/components/generators/black-ops/four/BlackOpsFourZombiesLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 4 Zombies Loadout Generator',
  description:
    'Spice up your COD Zombies gameplay! Generate unique random loadouts for Call of Duty: Black Ops 4 Zombies. Discover new weapons, perks, elixirs, and talisman combinations to challenge your survival skills.',
  keywords: [
    'COD Black Ops 4 Zombies',
    'Black Ops 4 Zombies Loadout Generator',
    'BO4 Zombies Random Loadout',
    'Treyarch Zombies',
    'Call of Duty Zombies',
    'Random Zombies Loadout',
    'BO4 Zombies Generator',
  ],
};

export default function BlackOpsFourZombiesGeneratorPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/four', text: 'Black Ops 4' },
    { text: 'Zombies Generator' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 4 Zombies</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <BlackOpsFourZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
