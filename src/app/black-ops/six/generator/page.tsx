import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import BlackOpsSixLoadout from '@/components/generators/black-ops/six/BlackOpsSixLoadout';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 6',
  description:
    'Spice up your COD gameplay! Generate unique random loadouts for Call of Duty Black Ops 6. Discover new weapons, perks, and gear combinations.',
  keywords: [
    'COD Black Ops 6 RCG',
    'black ops six random class generator',
    'black ops six',
    'black ops six rcg',
    'class generator',
    'zombies',
    'treyarch zombies',
    'black ops six zombies',
    'black ops six rcg',
  ],
};

export default function BlackOpsSixGeneratorPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 6</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <BlackOpsSixLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
