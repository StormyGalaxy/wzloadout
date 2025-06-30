import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import WorldAtWarLoadout from '@/components/generators/world-at-war/WorldAtWarLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'World at War Random Class Generator | Multiplayer Loadouts',
  description:
    'Return to the battlefields of WWII. Generate unique random classes for Call of Duty: World at War, featuring classic weapons, perks, and equipment to challenge your skills.',
  keywords: [
    'World at War random class generator',
    'WaW loadout generator',
    'WaW random loadout',
    'Call of Duty World at War',
    'WaW multiplayer',
    'COD WaW RCG',
    'World at War perks',
    'World at War weapons',
  ],
};

export default function WorldAtWarGeneratorPage() {
  const breadcrumbLinks = [
    { href: '/world-at-war', text: 'World At War' },
    { text: 'Multiplayer Generator' },
  ];

  return (
    <PageLayout containerClassName='theme-waw'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>World At War</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WorldAtWarLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
