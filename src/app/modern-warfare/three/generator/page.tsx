import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import ModernWarfareThreeLoadout from '@/components/generators/modern-warfare/three/ModernWarfareThreeLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare 3 (2023) Random Class Generator | COD MW3 Loadouts',
  description:
    'Challenge yourself with unique, randomly generated loadouts for Call of Duty: Modern Warfare 3 (2023). Discover new combinations of weapons, attachments, perks (Gear), and equipment to keep your multiplayer gameplay fresh and unpredictable.',
  keywords: [
    'Modern Warfare 3 random class generator',
    'COD MW3 random class generator',
    'MW3 loadout generator',
    'Call of Duty Modern Warfare 3 (2023)',
    'MW3 random loadouts',
    'Modern Warfare 3 perks',
    'MW3 gear',
    'MW3 weapons',
    'COD MW3 generator',
  ],
};

export default function ModernWarfareThreeGeneratorPage() {
  const breadcrumbLinks = [
    { href: '/modern-warfare/three', text: 'Modern Warfare 3' },
    { text: 'Multiplayer Generator' },
  ];

  return (
    <PageLayout containerClassName='theme-mw3'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare 3</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ModernWarfareThreeLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
