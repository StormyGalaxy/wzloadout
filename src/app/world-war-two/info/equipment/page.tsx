// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import EquipmentList from '@/components/info/EquipmentList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'World War Two Equipment',
  description: 'View all equipment in World War Two.',
  keywords: [
    'COD World War Two RCG',
    'world war two random class generator',
    'world war two',
    'world war two rcg',
    'world war two random class generator',
    'class generator',
    'zombies',
    'world war two zombies',
  ],
};

export default function WorldWarTwoEquipmentPage() {
  const breadcrumbLinks = [
    { href: '/world-war-two', text: 'World War Two' },
    { href: '/world-war-two/info', text: 'Info Hub' },
    { text: 'Equipment' },
  ];

  return (
    <PageLayout containerClassName='theme-ww2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>World War Two</h2>
          <p className={styles.pageSubtitle}>Equipment</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <EquipmentList game='world-war-two' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
