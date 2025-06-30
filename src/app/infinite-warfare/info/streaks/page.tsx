import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import StreakList from '@/components/info/StreakList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Infinite Warfare Streaks',
  description: 'View all streaks in Infinite Warfare.',
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

export default function InfiniteWarfareStreaksPage() {
  return (
    <PageLayout containerClassName='theme-infinite-warfare'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Infinite Warfare</h2>
          <p className={styles.pageSubtitle}>Streaks</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <StreakList game='infinite-warfare' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
