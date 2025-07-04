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
  title: 'Infinite Warfare Scorestreaks | All Streaks & Costs',
  description:
    'Dominate the futuristic battlefield in Call of Duty: Infinite Warfare. Get a complete list of all multiplayer Scorestreaks, including their required scores and tactical descriptions.',
  keywords: [
    'Infinite Warfare scorestreaks',
    'IW scorestreaks',
    'Call of Duty Infinite Warfare scorestreaks',
    'IW multiplayer scorestreaks',
    'All IW scorestreaks',
    'Infinite Warfare streak list',
    'IW streak guide',
  ],
};

export default function InfiniteWarfareStreaksPage() {
  const breadcrumbLinks = [
    { href: '/infinite-warfare', text: 'Infinite Warfare' },
    { href: '/infinite-warfare/info', text: 'Info Hub' },
    { text: 'Scorestreaks' },
  ];

  return (
    <PageLayout containerClassName='theme-infinite-warfare'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Infinite Warfare</h2>
          <p className={styles.pageSubtitle}>Scorestreaks</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} textOutline={true} className='mb-4' />
            <StreakList game='infinite-warfare' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
