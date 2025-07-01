// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import StreakList from '@/components/info/StreakList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Call of Duty: WW2 Scorestreaks Guide | All Streaks List',
  description:
    'A complete guide to all Scorestreaks available in Call of Duty: WW2 multiplayer. Learn the cost and function of every streak, from the Molotov Cocktail to the Ball Turret Gunner, to dominate the battlefield.',
  keywords: [
    'Call of Duty WW2 Scorestreaks',
    'COD WW2 Scorestreaks',
    'WW2 Scorestreaks list',
    'All WW2 Scorestreaks',
    'Recon Aircraft',
    'Fighter Pilot',
    'Artillery Barrage',
    'Paratroopers',
    'Ball Turret Gunner',
    'COD WW2 streaks',
  ],
};

export default function WorldWarTwoStreaksPage() {
  const breadcrumbLinks = [
    { href: '/world-war-two', text: 'World War 2' },
    { href: '/world-war-two/info', text: 'Info Hub' },
    { text: 'Scorestreaks' },
  ];

  return (
    <PageLayout containerClassName='theme-ww2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>World War 2</h2>
          <p className={styles.pageSubtitle}>Scorestreaks</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <StreakList game='world-war-two' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
