import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WeaponList from '@/components/info/WeaponList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 3 Weapons',
  description: 'View all weapons in Black Ops 3.',
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

export default function BlackOpsThreeWeaponsPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 3</h2>
          <p className={styles.pageSubtitle}>Weapons</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <WeaponList game='black-ops-three' link={'black-ops/three'} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
