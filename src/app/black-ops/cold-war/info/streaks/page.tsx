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
  title: 'Black Ops Cold War Scorestreaks | All Costs & Descriptions',
  description:
    'View a complete list of all Scorestreaks available in Call of Duty: Black Ops Cold War. Find out the cost, description, and tactical use for each streak.',
  keywords: [
    'Black Ops Cold War scorestreaks',
    'BOCW scorestreaks',
    'all cold war scorestreaks',
    'COD Cold War streaks',
    'Spy Plane',
    'Counter Spy Plane',
    'Attack Helicopter',
    'Cold War killstreaks',
  ],
};

export default function ColdWarStreaksPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/cold-war', text: 'Black Ops Cold War' },
    { href: '/black-ops/cold-war/info', text: 'Info Hub' },
    { text: 'Streaks' },
  ];

  return (
    <PageLayout containerClassName='theme-cold-war'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops Cold War</h2>
          <p className={styles.pageSubtitle}>Streaks</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <StreakList game='cold-war' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
