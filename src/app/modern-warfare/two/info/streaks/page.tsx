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
  title: 'Modern Warfare 2 (2022) Killstreaks & Scorestreaks List',
  description:
    'A complete guide to all Killstreaks and Scorestreaks in Call of Duty: Modern Warfare 2 (2022). Learn how to unlock and use every streak, from the UAV to the Juggernaut.',
  keywords: [
    'Modern Warfare 2 streaks',
    'MW2 Killstreaks',
    'MW2 Scorestreaks',
    'COD MW2 streaks list',
    'All MW2 Killstreaks',
    'UAV MW2',
    'VTOL Jet',
    'Chopper Gunner MW2',
    'Advanced UAV',
    'Juggernaut MW2',
  ],
};

export default function ModernWarfareTwoStreaksPage() {
  const breadcrumbLinks = [
    { href: '/modern-warfare/two', text: 'Modern Warfare 2' },
    { href: '/modern-warfare/two/info', text: 'Info Hub' },
    { text: 'Scorestreaks' },
  ];

  return (
    <PageLayout containerClassName='theme-mw2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare 2</h2>
          <p className={styles.pageSubtitle}>Scorestreaks</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <StreakList game='modern-warfare-two' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
