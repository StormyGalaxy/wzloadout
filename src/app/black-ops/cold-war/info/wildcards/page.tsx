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
  title: 'Black Ops Cold War Wildcards | Class-Changing Abilities',
  description:
    'Learn about all the powerful Wildcards in Black Ops Cold War. See how Law Breaker, Gunfighter, Perk Greed, and Danger Close can fundamentally change your loadouts.',
  keywords: [
    'Black Ops Cold War wildcards',
    'BOCW wildcards',
    'Law Breaker',
    'Gunfighter',
    'Perk Greed',
    'Danger Close',
    'Cold War class setup',
    'best wildcards cold war',
  ],
};

export default function ColdWarWildcardPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/cold-war', text: 'Black Ops Cold War' },
    { href: '/black-ops/cold-war/info', text: 'Info Hub' },
    { text: 'Wildcards' },
  ];

  return (
    <PageLayout containerClassName='theme-cold-war'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops Cold War</h2>
          <p className={styles.pageSubtitle}>Wildcards</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WildcardList game='cold-war' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
