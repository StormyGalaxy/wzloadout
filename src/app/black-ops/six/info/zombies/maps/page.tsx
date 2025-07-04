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
  title: 'Black Ops 6 Zombies Maps | Terminus, Liberty Falls & More',
  description:
    'Explore all the round-based Zombies maps in Call of Duty: Black Ops 6. Get detailed information and guides for Terminus, Liberty Falls, and all post-launch maps.',
  keywords: [
    'Black Ops 6 Zombies maps',
    'BO6 Zombies maps',
    'Call of Duty Black Ops 6 Zombies',
    'BO6 Zombies',
    'round-based zombies',
    'Terminus map',
    'Liberty Falls map',
    'Citadelle des Morts',
    'The Tomb',
    'Shattered Veil',
    'BO6 easter eggs',
  ],
};

export default function BlackOpsSixZombiesMapsPage() {
  const dataKeys = ['name', 'type', 'game', 'isDlc'];
  const breadcrumbLinks = [
    { href: '/black-ops/six', text: 'Black Ops 6' },
    { href: '/black-ops/six/info', text: 'Info Hub' },
    { text: 'Zombies Maps' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 6</h2>
          <p className={styles.pageSubtitle}>Zombies Maps</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ZombiesMapsList game='black-ops-six-zombies' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
