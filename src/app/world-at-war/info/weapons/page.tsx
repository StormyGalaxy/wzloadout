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
  title: 'World At War Weapons',
  description: 'View all weapons in World At War.',
  keywords: [
    'COD World At War RCG',
    'COD WAW RCG',
    'waw random class generator',
    'waw',
    'world at war',
    'world at war rcg',
    'world at war random class generator',
    'class generator',
    'zombies',
    'world at war zombies',
    'world at war zombies',
    'world at war rcg',
    'world at war random class generator',
  ],
};

export default function WorldAtWarWeaponsPage() {
  const breadcrumbLinks = [
    { href: '/world-at-war', text: 'World At War' },
    { href: '/world-at-war/info', text: 'Info Hub' },
    { text: 'Weapons' },
  ];

  return (
    <PageLayout containerClassName='theme-waw'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>World At War</h2>
          <p className={styles.pageSubtitle}>Weapons</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WeaponList game='world-at-war' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
