import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import CustomMatch from '@/components/generators/world-war-two/CustomMatch';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'WWII Custom Match Generator',
  description:
    'Create and randomize custom matches for Call of Duty: WWII. Easily set up teams, game modes, maps, and rules for a unique private match experience with friends.',
  keywords: [
    'COD WWII custom match',
    'WWII private match generator',
    'Call of Duty WWII custom games',
    'ww2 custom match settings',
    'cod wwii party games',
    'world war two custom match',
    'multiplayer',
    'private match',
  ],
};

export default function WorldWarTwoCustomMatchPage() {
  const breadcrumbLinks = [
    { href: '/world-war-two', text: 'World War Two' },
    { text: 'Custom Match' },
  ];

  return (
    <PageLayout containerClassName='theme-ww2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>World War Two</h2>
          <p className={styles.pageSubtitle}>Custom Match Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <CustomMatch />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
