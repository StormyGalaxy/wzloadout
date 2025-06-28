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
  title: 'Black Ops 6 Wildcards | All Wildcard Effects & Info',
  description:
    'Break the rules of class creation in Call of Duty: Black Ops 6. Get a complete list of all multiplayer Wildcards and understand their powerful effects on your loadouts.',
  keywords: [
    'Black Ops 6 wildcards',
    'BO6 wildcards',
    'Call of Duty Black Ops 6 wildcards',
    'BO6 multiplayer wildcards',
    'All BO6 wildcards',
    'Black Ops 6 wildcard list',
    'BO6 wildcard guide',
    'Black Ops 6 create a class',
  ],
};

export default function BlackOpsSixWildcardPage() {
  const dataKeys = ['name', 'description', 'type', 'game', 'isDlc'];
  const breadcrumbLinks = [
    { href: '/black-ops/six', text: 'Black Ops 6' },
    { href: '/black-ops/six/info', text: 'Info Hub' },
    { text: 'Wildcards' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 6</h2>
          <p className={styles.pageSubtitle}>Wildcards</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WildcardList game='black-ops-six' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
