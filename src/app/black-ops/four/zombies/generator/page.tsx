import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import BlackOpsFourZombiesLoadout from '@/components/generators/black-ops/four/BlackOpsFourZombiesLoadout';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Four Zombies',
  description:
    'Spice up your COD Zombies gameplay! Generate unique random loadouts for Call of Duty Black Ops Four Zombies. Discover new weapons, perks, and gear combinations.',
  keywords: [
    'COD Black Ops Four RCG',
    'black ops four random class generator',
    'black ops four',
    'black ops four rcg',
    'class generator',
    'zombies',
    'treyarch zombies',
    'black ops four zombies',
    'black ops four rcg',
  ],
};

export default function BlackOpsFourZombiesGeneratorPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops Four Zombies</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <BlackOpsFourZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
