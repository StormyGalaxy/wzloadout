import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WeaponList from '@/components/info/WeaponList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare Remastered Weapons',
  description: 'View all weapons in Modern Warfare Remastered.',
  keywords: [
    'COD Modern Warfare Remastered RCG',
    'modern warfare remastered random class generator',
    'modern warfare remastered',
    'modern warfare remastered rcg',
    'class generator',
  ],
};

export default function ModernWarfareRemasteredWeaponsPage() {
  const dataKeys = ['name', 'type', 'game', 'no_attach', 'no_attach_info', 'isDlc'];
  return (
    <PageLayout containerClassName='theme-mwr'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare Remastered</h2>
          <p className={styles.pageSubtitle}>Weapons</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <WeaponList
              game='modern-warfare-remastered'
              dataKeys={dataKeys}
              link={'modern-warfare/remastered'}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
