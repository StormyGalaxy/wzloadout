import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import CustomMutations from '@/components/generators/black-ops/four/CustomMutations';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 4 Zombies Custom Mutations Generator',
  description:
    'Spice up your gameplay with unique, randomly generated custom mutations for Black Ops 4 Zombies. Discover new and challenging ways to survive the undead hordes!',
  keywords: [
    'COD Black Ops 4 Zombies',
    'Black Ops 4 Custom Mutations',
    'Zombies Custom Mutations Generator',
    'BO4 Zombies',
    'Treyarch Zombies',
    'Call of Duty Zombies',
    'Random Zombies Settings',
  ],
};

export default function BlackOpsFourCustomMutationsPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/four', text: 'Black Ops 4' },
    { text: 'Custom Mutations' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 4 Zombies</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <CustomMutations />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
