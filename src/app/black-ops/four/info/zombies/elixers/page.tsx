import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ZombiesGobblegumList from '@/components/info/ZombiesGobblegumList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Four Zombies Elixers',
  description: 'View all elixers in Black Ops Four Zombies.',
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

export default function BlackOpsFourZombiesElixersPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops Four</h2>
          <p className={styles.pageSubtitle}>Zombies Elixers</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <ZombiesGobblegumList game='black-ops-four-zombies' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
