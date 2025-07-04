import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WildcardList from '@/components/info/WildcardList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Warzone Wildcards Guide | Overkill, Gunfighter & More',
  description:
    'A complete guide to all wildcards available in Call of Duty: Warzone. Learn how each wildcard, like Overkill and Gunfighter, can fundamentally change your loadout and strategy.',
  keywords: [
    'Warzone wildcards',
    'COD Warzone wildcards',
    'Best Warzone wildcards',
    'Overkill wildcard',
    'Gunfighter wildcard',
    'Warzone loadout guide',
    'Call of Duty Warzone',
    'Black Ops 6',
    'Modern Warfare 3',
  ],
};

export default function WarzoneWildcardPage() {
  const breadcrumbLinks = [
    { href: '/warzone', text: 'Warzone' },
    { href: '/warzone/info', text: 'Info Hub' },
    { text: 'Wildcards' },
  ];

  return (
    <PageLayout containerClassName='theme-warzone'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Warzone</h2>
          <p className={styles.pageSubtitle}>Wildcards</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WildcardList game='warzone' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
