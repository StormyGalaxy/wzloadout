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
  title: 'Black Ops 4 Specialists Information',
  description:
    'Learn about all the Specialists available in Call of Duty: Black Ops 4, including their unique abilities and equipment.',
  keywords: [
    'Black Ops 4 Specialists',
    'COD Black Ops 4 Specialists',
    'all specialists black ops 4',
    'specialist abilities black ops 4',
    'black ops 4 characters',
    'multiplayer specialists',
    'specialist equipment',
    'Ruin',
    'Seraph',
    'Firebreak',
    'Battery',
    'Recon',
    'Ajax',
    'Torque',
    'Crash',
    'Nomad',
    'Prophet',
    'Outrider',
    'Spectre',
    'Reaper',
    'Zero',
  ],
};

export default function BlackOpsFourSpecialistsPage() {
  const dataKeys = ['name', 'equipment', 'weapon', 'type', 'game'];
  const breadcrumbLinks = [
    { href: '/black-ops/four', text: 'Black Ops 4' },
    { href: '/black-ops/four/info', text: 'Info Hub' },
    { text: 'Specialists' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 4</h2>
          <p className={styles.pageSubtitle}>Specialists</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <SpecialistList game='black-ops-four' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
