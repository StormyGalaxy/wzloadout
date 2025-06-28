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
  title: 'Black Ops 4 Wildcards',
  description:
    'View all Wildcards in Call of Duty: Black Ops 4. Learn how these powerful options can bend the rules of class creation to give you a competitive edge.',
  keywords: [
    'Black Ops 4 Wildcards',
    'COD Black Ops 4 Wildcards',
    'BO4 Wildcards',
    'class setup',
    'create a class',
    'loadout customization',
    'Overkill',
    'Underkill',
    'Perk Greed',
    'Perk Gluttony',
    'Primary Gunfighter',
    'Secondary Gunfighter',
    'Primary Operator Mod',
    'Secondary Operator Mod',
  ],
};

export default function BlackOpsFourWildcardPage() {
  const dataKeys = ['name', 'description', 'type', 'game'];
  const breadcrumbLinks = [
    { href: '/black-ops/four', text: 'Black Ops 4' },
    { href: '/black-ops/four/info', text: 'Info Hub' },
    { text: 'Wildcards' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 4</h2>
          <p className={styles.pageSubtitle}>Wildcards</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WildcardList game='black-ops-four' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
