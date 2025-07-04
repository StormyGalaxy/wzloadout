import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import SpecialistList from '@/components/info/SpecialistList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 3 Specialists | All Abilities & Weapons',
  description:
    'Learn about all the multiplayer Specialists in Call of Duty: Black Ops 3. Get detailed information on each Specialist, including their unique weapon and powerful ability.',
  keywords: [
    'Black Ops 3 Specialists',
    'BO3 Specialists',
    'Call of Duty Black Ops 3 Specialists',
    'BO3 Specialist weapons',
    'BO3 Specialist abilities',
    'All BO3 Specialists',
    'Black Ops 3 classes',
  ],
};

export default function BlackOpsThreeSpecialistsPage() {
  const dataKeys = ['name', 'type', 'game'];
  const breadcrumbLinks = [
    { href: '/black-ops/three', text: 'Black Ops 3' },
    { href: '/black-ops/three/info', text: 'Info Hub' },
    { text: 'Specialists' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 3</h2>
          <p className={styles.pageSubtitle}>Specialists</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <SpecialistList game='black-ops-three' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
