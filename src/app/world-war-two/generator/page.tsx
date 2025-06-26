import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import WorldWarTwoLoadout from '@/components/generators/world-war-two/WorldWarTwoLoadout';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'World War Two',
  description:
    'Spice up your COD gameplay! Generate unique random loadouts for Call of Duty World War Two. Discover new weapons, perks, and gear combinations.',
  keywords: [
    'COD World War Two RCG',
    'world war two random class generator',
    'world war two',
    'world war two rcg',
    'world war two random class generator',
    'class generator',
    'zombies',
    'world war two zombies',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/world-war-two/generator' },
  { label: 'Zombies Generator', href: '/world-war-two/zombies-generator' },
  { label: 'Custom Match', href: '/world-war-two/custom-match' },
  { label: 'Loadout Info', href: '/world-war-two/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function WorldWarTwoGeneratorPage() {
  return (
    <PageLayout navLinks={navLinks} containerClassName='theme-ww2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>World War Two</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <WorldWarTwoLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
