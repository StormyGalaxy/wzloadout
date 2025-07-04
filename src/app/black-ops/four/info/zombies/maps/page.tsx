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
  title: 'Black Ops 4 Zombies Maps',
  description:
    'Explore all the Zombies maps in Call of Duty: Black Ops 4. Discover the unique settings, storylines, and challenges of both the Chaos and Aether story arcs.',
  keywords: [
    'Black Ops 4 Zombies Maps',
    'COD Zombies Maps',
    'Treyarch Zombies',
    'Black Ops 4 Zombies',
    'BO4 Zombies Maps',
    'Zombies storylines',
    'Chaos Story',
    'Aether Story',
    // Chaos Story Maps
    'IX',
    'Voyage of Despair',
    'Dead of the Night',
    'Ancient Evil',
    // Aether Story Maps
    'Blood of the Dead',
    'Classified',
    'Alpha Omega',
    'Tag der Toten',
  ],
};

export default function BlackOpsFourZombiesMapsPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/four', text: 'Black Ops 4' },
    { href: '/black-ops/four/info', text: 'Info Hub' },
    { text: 'Zombies Maps' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 4</h2>
          <p className={styles.pageSubtitle}>Zombies Maps</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ZombiesMapsList game='black-ops-four-zombies' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
