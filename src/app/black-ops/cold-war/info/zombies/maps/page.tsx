import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ZombiesMapsList from '@/components/info/ZombiesMapsList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Cold War Zombies Maps',
  description:
    'A complete guide to all Black Ops Cold War Zombies maps. Explore guides for the round-based maps (Die Maschine, Firebase Z, Mauer der Toten, Forsaken) and the large-scale Outbreak mode.',
  keywords: [
    'Black Ops Cold War Zombies maps',
    'BOCW zombies maps',
    'Die Maschine guide',
    'Firebase Z guide',
    'Mauer der Toten guide',
    'Forsaken guide',
    'Cold War Outbreak zones',
    'Dark Aether story',
    'treyarch zombies maps',
  ],
};

export default function ColdWarZombiesMapsPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/cold-war', text: 'Black Ops Cold War' },
    { href: '/black-ops/cold-war/info', text: 'Info Hub' },
    { text: 'Zombies Maps' },
  ];

  return (
    <PageLayout containerClassName='theme-cold-war'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops Cold War</h2>
          <p className={styles.pageSubtitle}>Zombies Maps</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ZombiesMapsList game='cold-war-zombies' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
