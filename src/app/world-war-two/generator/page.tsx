import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import WorldWarTwoLoadout from '@/components/generators/world-war-two/WorldWarTwoLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'WWII Multiplayer Random Class Generator',
  description:
    'Generate random multiplayer loadouts for Call of Duty: WWII. Discover unique combinations of divisions, weapons, basic training, and equipment to challenge yourself in your next match.',
  keywords: [
    'COD World War Two RCG',
    'world war two random class generator',
    'world war two multiplayer',
    'wwii random class generator',
    'wwii random loadout',
    'cod ww2 divisions',
    'cod ww2 generator',
    'cod wwii multiplayer generator',
    'class generator',
  ],
};

export default function WorldWarTwoGeneratorPage() {
  const breadcrumbLinks = [
    { href: '/world-war-two', text: 'World War Two' },
    { text: 'Multiplayer Generator' },
  ];

  return (
    <PageLayout containerClassName='theme-ww2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>World War Two</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WorldWarTwoLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
