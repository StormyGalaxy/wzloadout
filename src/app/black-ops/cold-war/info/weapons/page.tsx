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
  title: 'Black Ops Cold War Weapons | All Guns & Stats',
  description:
    'Explore the complete arsenal of Black Ops Cold War. This page lists all primary and secondary weapons with links to detailed stats and attachment information.',
  keywords: [
    'Black Ops Cold War weapons',
    'BOCW weapons',
    'COD Cold War guns',
    'Cold War weapon stats',
    'all cold war weapons',
    'assault rifles cold war',
    'smgs cold war',
    'tactical rifles cold war',
    'snipers cold war',
  ],
};

export default function ColdWarWeaponsPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/cold-war', text: 'Black Ops Cold War' },
    { href: '/black-ops/cold-war/info', text: 'Info Hub' },
    { text: 'Weapons' },
  ];

  return (
    <PageLayout containerClassName='theme-cold-war'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops Cold War</h2>
          <p className={styles.pageSubtitle}>Weapons</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WeaponList game='cold-war' link={'black-ops/cold-war'} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
