import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import BlackOpsFourLoadout from '@/components/generators/black-ops/four/BlackOpsFourLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 4 Multiplayer Class Generator',
  description:
    'Create random classes for Call of Duty: Black Ops 4 multiplayer. Get new combinations of specialists, weapons, gear, and perks to challenge your skills and keep the game fresh.',
  keywords: [
    'Black Ops 4 random class generator',
    'BO4 multiplayer generator',
    'COD Black Ops 4 loadouts',
    'BO4 random perks',
    'Black Ops 4 specialists',
    'Call of Duty BO4 generator',
    'bo4 rcg',
  ],
};

export default function BlackOpsFourGeneratorPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/four', text: 'Black Ops 4' },
    { text: 'Multiplayer Generator' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 4</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <BlackOpsFourLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
