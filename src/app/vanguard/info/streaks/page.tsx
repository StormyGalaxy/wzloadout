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
  title: 'Call of Duty: Vanguard Killstreaks Guide | All Streaks List',
  description:
    'A complete guide to all Killstreaks available in Call of Duty: Vanguard multiplayer. Learn the kill requirement and function of every streak, from the Intel UAV to the devastating Attack Dogs.',
  keywords: [
    'Call of Duty Vanguard Killstreaks',
    'COD Vanguard Killstreaks',
    'Vanguard streaks list',
    'All Vanguard Killstreaks',
    'Vanguard Killstreaks guide',
    'Intel UAV',
    'Glide Bomb',
    'Attack Dogs',
    'V2 Rocket',
    'COD Vanguard streaks',
  ],
};

export default function VanguardStreaksPage() {
  const breadcrumbLinks = [
    { href: '/vanguard', text: 'Vanguard' },
    { href: '/vanguard/info', text: 'Info Hub' },
    { text: 'Killstreaks' },
  ];

  return (
    <PageLayout containerClassName='theme-vanguard'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Vanguard</h2>
          <p className={styles.pageSubtitle}>Killstreaks</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <StreakList game='vanguard' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
