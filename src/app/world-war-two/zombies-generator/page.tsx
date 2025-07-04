import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import WorldWarTwoZombiesLoadout from '@/components/generators/world-war-two/WorldWarTwoZombiesLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'WW2 Zombies Random Loadout Generator',
  description:
    'Challenge the undead in Call of Duty: WW2 Zombies! Generate a completely random loadout, including character, weapon, special ability, and mods. A fun way to test your skills and add variety to your game.',
  keywords: [
    'COD WW2 Zombies',
    'WW2 Zombies generator',
    'Call of Duty WW2 Zombies',
    'random zombies loadout',
    'ww2 zombies class generator',
    'cod ww2 zombies specials',
    'cod ww2 zombies mods',
    'zombies',
    'world war two zombies',
  ],
};

export default function WorldWarTwoZombiesGeneratorPage() {
  const breadcrumbLinks = [
    { href: '/world-war-two', text: 'World War 2' },
    { text: 'Zombies Generator' },
  ];

  return (
    <PageLayout containerClassName='theme-ww2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>World War 2 Zombies</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WorldWarTwoZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
