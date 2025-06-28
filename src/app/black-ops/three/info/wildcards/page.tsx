import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WildcardList from '@/components/info/WildcardList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 3 Wildcards',
  description: 'View all wildcards in Black Ops 3.',
  keywords: [
    'COD Black Ops 3 RCG',
    'black ops three random class generator',
    'black ops three',
    'black ops three rcg',
    'class generator',
    'zombies',
    'treyarch zombies',
    'black ops three zombies',
    'black ops three rcg',
  ],
};

export default function BlackOpsThreeWildcardPage() {
  const dataKeys = ['name', 'description', 'type', 'game'];
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 3</h2>
          <p className={styles.pageSubtitle}>Wildcards</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <WildcardList game='black-ops-three' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
