import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WeaponList from '@/components/info/WeaponList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 3 Weapons | All Stats & Attachments',
  description:
    'Explore the full futuristic arsenal of Call of Duty: Black Ops 3. Get detailed stats and attachment lists for every assault rifle, SMG, LMG, shotgun, sniper rifle, and pistol.',
  keywords: [
    'Black Ops 3 weapons',
    'BO3 weapons',
    'Call of Duty Black Ops 3 weapons',
    'BO3 weapon stats',
    'BO3 attachments',
    'All BO3 weapons',
    'Black Ops 3 weapon list',
  ],
};

export default function BlackOpsThreeWeaponsPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/three', text: 'Black Ops 3' },
    { href: '/black-ops/three/info', text: 'Info Hub' },
    { text: 'Weapons' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 3</h2>
          <p className={styles.pageSubtitle}>Weapons</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WeaponList game='black-ops-three' link={'black-ops/three'} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
