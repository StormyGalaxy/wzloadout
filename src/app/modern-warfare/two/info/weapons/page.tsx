import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WeaponList from '@/components/info/WeaponList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare Two Weapons',
  description: 'View all weapons in Modern Warfare Two.',
  keywords: [
    'COD Modern Warfare Two RCG',
    'modern warfare two random class generator',
    'modern warfare two',
    'modern warfare two rcg',
    'class generator',
  ],
};

export default function ModernWarfareTwoWeaponsPage() {
  const dataKeys = ['name', 'type', 'game', 'no_attach', 'no_attach_info', 'isDlc'];
  return (
    <PageLayout containerClassName='theme-mw2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare Two</h2>
          <p className={styles.pageSubtitle}>Weapons</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <WeaponList game='modern-warfare-two' dataKeys={dataKeys} link={'modern-warfare/two'} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
