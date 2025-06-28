import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import BlackOpsSixZombiesLoadout from '@/components/generators/black-ops/six/BlackOpsSixZombiesLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 6 Zombies Loadout Generator',
  description:
    'Challenge the horde with a new loadout every time! Generate random classes for Call of Duty: Black Ops 6 Zombies, including weapons, perks, Gobblegums, and more for the ultimate round-based survival test.',
  keywords: [
    'Black Ops 6 Zombies generator',
    'BO6 Zombies loadout generator',
    'Call of Duty Black Ops 6 Zombies',
    'random zombies class',
    'BO6 zombies',
    'round-based zombies',
    'Gobblegums',
    'BO6 Wonder Weapons',
    'zombies loadout generator',
  ],
};

export default function BlackOpsSixZombiesGeneratorPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/six', text: 'Black Ops 6' },
    { text: 'Zombies Generator' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 6 Zombies</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <BlackOpsSixZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
