import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import ModernWarfareThreeZombiesLoadout from '@/components/generators/modern-warfare/three/ModernWarfareThreeZombiesLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare Zombies (MWZ) Random Loadout Generator',
  description:
    'Generate unique, random loadouts for Call of Duty: Modern Warfare Zombies (MWZ). Challenge yourself with new combinations of weapons, equipment, and more to survive the hordes in Modern Warfare 3.',
  keywords: [
    'Modern Warfare Zombies',
    'MWZ',
    'MW3 Zombies',
    'Modern Warfare 3 Zombies',
    'MWZ random loadout',
    'zombies generator',
    'COD MWZ',
    'MW3 Zombies loadout',
  ],
};

export default function ModernWarfareThreeZombiesGeneratorPage() {
  const breadcrumbLinks = [
    { href: '/modern-warfare/three', text: 'Modern Warfare 3' },
    { text: 'Zombies Generator' },
  ];

  return (
    <PageLayout containerClassName='theme-mw3'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare Zombies</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ModernWarfareThreeZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
