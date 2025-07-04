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
  title: 'Black Ops 6 Scorestreaks | All Streaks & Costs',
  description:
    'Dominate the battlefield in Call of Duty: Black Ops 6. Get a complete list of all multiplayer Scorestreaks, including their costs and tactical descriptions.',
  keywords: [
    'Black Ops 6 scorestreaks',
    'BO6 scorestreaks',
    'Call of Duty Black Ops 6 scorestreaks',
    'BO6 multiplayer scorestreaks',
    'All BO6 scorestreaks',
    'Black Ops 6 streak list',
    'BO6 streak guide',
  ],
};

export default function BlackOpsSixStreaksPage() {
  const dataKeys = ['name', 'score', 'type', 'game', 'isDlc'];
  const breadcrumbLinks = [
    { href: '/black-ops/six', text: 'Black Ops 6' },
    { href: '/black-ops/six/info', text: 'Info Hub' },
    { text: 'Scorestreaks' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 6</h2>
          <p className={styles.pageSubtitle}>Scorestreaks</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <StreakList game='black-ops-six' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
