import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import PerkList from '@/components/info/PerkList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Four Perks',
  description: 'View all perks in Black Ops Four.',
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

export default function BlackOpsFourPerksPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops Four</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <PerkList game='black-ops-four' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
