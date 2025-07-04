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
  title: 'Black Ops 3 Scorestreaks | All Streaks & Costs',
  description:
    'Dominate the battlefield in Call of Duty: Black Ops 3. Get a complete list of all multiplayer Scorestreaks, including their required scores and tactical descriptions.',
  keywords: [
    'Black Ops 3 scorestreaks',
    'BO3 scorestreaks',
    'Call of Duty Black Ops 3 scorestreaks',
    'BO3 multiplayer scorestreaks',
    'All BO3 scorestreaks',
    'Black Ops 3 streak list',
    'BO3 streak guide',
  ],
};

export default function BlackOpsThreeStreaksPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/three', text: 'Black Ops 3' },
    { href: '/black-ops/three/info', text: 'Info Hub' },
    { text: 'Scorestreaks' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 3</h2>
          <p className={styles.pageSubtitle}>Scorestreaks</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <StreakList game='black-ops-three' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
