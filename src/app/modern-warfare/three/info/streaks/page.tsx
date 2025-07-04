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
  title: 'Modern Warfare 3 (2023) Killstreaks & Scorestreaks List',
  description:
    'A complete guide to all Killstreaks and Scorestreaks in Call of Duty: Modern Warfare 3 (2023). Learn how to unlock and use every streak, from the UAV to the Juggernaut.',
  keywords: [
    'Modern Warfare 3 streaks',
    'MW3 Killstreaks',
    'MW3 Scorestreaks',
    'COD MW3 streaks list',
    'All MW3 Killstreaks',
    'UAV MW3',
    'VTOL Jet',
    'Chopper Gunner MW3',
    'Advanced UAV',
    'Juggernaut Recon',
  ],
};

export default function ModernWarfareThreeStreaksPage() {
  const breadcrumbLinks = [
    { href: '/modern-warfare/three', text: 'Modern Warfare 3' },
    { href: '/modern-warfare/three/info', text: 'Info Hub' },
    { text: 'Scorestreaks' },
  ];

  return (
    <PageLayout containerClassName='theme-mw3'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare 3</h2>
          <p className={styles.pageSubtitle}>Scorestreaks</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <StreakList game='modern-warfare-three' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
