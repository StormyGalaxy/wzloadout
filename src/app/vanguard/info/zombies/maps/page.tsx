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
  title: 'Call of Duty: Vanguard Zombies Maps Guide | Der Anfang, Terra Maledicta & More',
  description:
    'Explore detailed guides for all Call of Duty: Vanguard Zombies maps, including the hub-style Der Anfang and Terra Maledicta, and the classic round-based Shi No Numa. Discover layouts, objectives, and secrets to survive the Dark Aether.',
  keywords: [
    'Call of Duty Vanguard Zombies maps',
    'Vanguard Zombies maps',
    'COD Vanguard Zombies',
    'Der Anfang map guide',
    'Terra Maledicta map guide',
    'Shi No Numa Vanguard',
    'Vanguard Zombies Easter Eggs',
    'Vanguard Zombies objectives',
  ],
};

export default function VanguardZombiesMapsPage() {
  const breadcrumbLinks = [
    { href: '/vanguard', text: 'Vanguard' },
    { href: '/vanguard/info', text: 'Info Hub' },
    { text: 'Zombies Maps' },
  ];

  return (
    <PageLayout containerClassName='theme-vanguard'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Vanguard</h2>
          <p className={styles.pageSubtitle}>Zombies Maps</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ZombiesMapsList game='vanguard-zombies' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
