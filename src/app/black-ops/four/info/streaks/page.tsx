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
  title: 'Black Ops 4 Scorestreaks',
  description:
    'View all Scorestreaks available in Call of Duty: Black Ops 4. Learn about the required score and capabilities of each multiplayer streak to dominate the battlefield.',
  keywords: [
    'Black Ops 4 Scorestreaks',
    'COD Black Ops 4 Scorestreaks',
    'BO4 Streaks',
    'Black Ops 4 killstreaks',
    'multiplayer scorestreaks',
    'all scorestreaks bo4',
    'scorestreak list',
    'RC-XD',
    'Dart',
    'UAV',
    'Care Package',
    'Counter-UAV',
    'Hellstorm',
    'Lightning Strike',
    'Sentry',
    'Drone Squad',
    "Sniper's Nest",
    'Mantis',
    'Thresher',
    'Attack Chopper',
    'Strike Team',
    'Gunship',
  ],
};

export default function BlackOpsFourStreaksPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/four', text: 'Black Ops 4' },
    { href: '/black-ops/four/info', text: 'Info Hub' },
    { text: 'Scorestreaks' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 4</h2>
          <p className={styles.pageSubtitle}>Scorestreaks</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <StreakList game='black-ops-four' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
