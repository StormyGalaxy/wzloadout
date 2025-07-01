import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import PerkList from '@/components/info/PerkList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare Remastered Perks',
  description: 'View all perks in Modern Warfare Remastered.',
  keywords: [
    'COD Modern Warfare Remastered RCG',
    'modern warfare remastered random class generator',
    'modern warfare remastered',
    'modern warfare remastered rcg',
    'class generator',
  ],
};

export default function ModernWarfareRemasteredPerksPage() {
  return (
    <PageLayout containerClassName='theme-mwr'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare Remastered</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <PerkList game='modern-warfare-remastered' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
