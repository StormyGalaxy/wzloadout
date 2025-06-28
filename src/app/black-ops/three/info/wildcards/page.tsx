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
  title: 'Black Ops 3 Wildcards | Pick 10 System Info',
  description:
    'Bend the rules of the Pick 10 system in Call of Duty: Black Ops 3. Explore a complete list of all multiplayer Wildcards and see how they can enhance your loadouts.',
  keywords: [
    'Black Ops 3 wildcards',
    'BO3 wildcards',
    'Call of Duty Black Ops 3 wildcards',
    'BO3 multiplayer wildcards',
    'All BO3 wildcards',
    'Black Ops 3 wildcard list',
    'BO3 Pick 10 system',
  ],
};

export default function BlackOpsThreeWildcardPage() {
  const dataKeys = ['name', 'description', 'type', 'game'];
  const breadcrumbLinks = [
    { href: '/black-ops/three', text: 'Black Ops 3' },
    { href: '/black-ops/three/info', text: 'Info Hub' },
    { text: 'Wildcards' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 3</h2>
          <p className={styles.pageSubtitle}>Wildcards</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WildcardList game='black-ops-three' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
