import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WeaponList from '@/components/info/WeaponList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Infinite Warfare Weapons',
  description: 'View all weapons in Infinite Warfare.',
  keywords: [
    'COD Infinite Warfare RCG',
    'COD IW RCG',
    'iw random class generator',
    'iw',
    'infinite warfare',
    'infinite warfare rcg',
    'infinite warfare random class generator',
    'infinite warfare rcg',
    'infinite warfare random class generator',
  ],
};

export default function InfiniteWarfareWeaponsPage() {
  const dataKeys = ['name', 'type', 'game', 'no_attach', 'no_attach_info'];

  return (
    <PageLayout containerClassName='theme-infinite-warfare'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Infinite Warfare</h2>
          <p className={styles.pageSubtitle}>Weapons</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <WeaponList game='infinite-warfare' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
