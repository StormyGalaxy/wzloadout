import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WeaponList from '@/components/info/WeaponList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare 3 Weapons',
  description: 'View all weapons in Modern Warfare 3.',
  keywords: [
    'COD Modern Warfare 3 RCG',
    'modern warfare three random class generator',
    'modern warfare three',
    'modern warfare three rcg',
    'class generator',
  ],
};

export default function ModernWarfareThreeWeaponsPage() {
  const dataKeys = ['name', 'type', 'game', 'no_attach', 'no_attach_info', 'isDlc'];
  return (
    <PageLayout containerClassName='theme-mw3'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare 3</h2>
          <p className={styles.pageSubtitle}>Weapons</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <WeaponList
              game='modern-warfare-three'
              dataKeys={dataKeys}
              link={'modern-warfare/three'}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
