// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import ColdWarZombiesLoadout from '@/components/generators/black-ops/cold-war/ColdWarZombiesLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Cold War Zombies Loadout Generator',
  description:
    'Take on the Dark Aether with a random loadout for Black Ops Cold War Zombies. Generate new combinations of starting weapons and field upgrades to challenge your survival skills.',
  keywords: [
    'Black Ops Cold War Zombies generator',
    'BOCW zombies generator',
    'COD Cold War zombies',
    'Cold War random zombies loadout',
    'Cold War zombies field upgrade',
    'Call of Duty Cold War zombies generator',
    'bocw zombies rcg',
    'treyarch zombies',
  ],
};

export default function ColdWarZombiesGeneratorPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/cold-war', text: 'Black Ops Cold War' },
    { text: 'Zombies Generator' },
  ];

  return (
    <PageLayout containerClassName='theme-cold-war'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops Cold War Zombies</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ColdWarZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
