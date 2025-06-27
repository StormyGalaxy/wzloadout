import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WildcardList from '@/components/info/WildcardList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Four Wildcards',
  description: 'View all wildcards in Black Ops Four.',
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

export default function BlackOpsFourWildcardPage() {
  const dataKeys = ['name', 'description', 'type', 'game'];
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops Four</h2>
          <p className={styles.pageSubtitle}>Wildcards</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <WildcardList game='black-ops-four' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
