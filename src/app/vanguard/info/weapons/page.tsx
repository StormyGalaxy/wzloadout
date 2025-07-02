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
  title: 'Call of Duty: Vanguard Weapon Stats & Info | All Guns List',
  description:
    'Explore a comprehensive database of all primary and secondary weapons in Call of Duty: Vanguard. View detailed stats, available attachments, and information for every rifle, SMG, LMG, sniper, and more.',
  keywords: [
    'Call of Duty Vanguard weapons',
    'COD Vanguard weapon stats',
    'Vanguard guns list',
    'All Vanguard weapons',
    'Vanguard attachments',
    'STG44',
    'MP-40',
    'Automaton',
    'Kar98k',
    'MG42',
  ],
};

export default function VanguardWeaponsPage() {
  const breadcrumbLinks = [
    { href: '/vanguard', text: 'Vanguard' },
    { href: '/vanguard/info', text: 'Info Hub' },
    { text: 'Weapons' },
  ];

  return (
    <PageLayout containerClassName='theme-vanguard'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Vanguard</h2>
          <p className={styles.pageSubtitle}>Weapons</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WeaponList game='vanguard' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
