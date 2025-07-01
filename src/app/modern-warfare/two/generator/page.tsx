import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import ModernWarfareTwoLoadout from '@/components/generators/modern-warfare/ModernWarfareTwoLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare 2 (2022) Random Class Generator | COD MW2 Loadouts',
  description:
    'Challenge yourself with unique, randomly generated loadouts for Call of Duty: Modern Warfare 2 (2022). Discover new combinations of weapons, attachments, perks, and equipment to keep your gameplay fresh and exciting.',
  keywords: [
    'Modern Warfare 2 random class generator',
    'COD MW2 random class generator',
    'MW2 loadout generator',
    'Call of Duty Modern Warfare 2 (2022)',
    'MW2 random loadouts',
    'Modern Warfare 2 perks',
    'MW2 weapons',
    'COD MW2 generator',
  ],
};

export default function ModernWarfareTwoGeneratorPage() {
  const breadcrumbLinks = [
    { href: '/modern-warfare/two', text: 'Modern Warfare 2' },
    { text: 'Multiplayer Generator' },
  ];

  return (
    <PageLayout containerClassName='theme-mw2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare Two</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ModernWarfareTwoLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
