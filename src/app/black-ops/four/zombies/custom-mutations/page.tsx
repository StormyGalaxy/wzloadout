import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import CustomMutations from '@/components/generators/black-ops/four/CustomMutations';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Four Custom Mutations',
  description:
    'Spice up your COD gameplay! Generate unique random custum mutations settings for Black Ops 4 Zombies. Discover new ways to play.',
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

export default function BlackOpsFourCustomMutationsPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops Four Zombies</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <CustomMutations />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
