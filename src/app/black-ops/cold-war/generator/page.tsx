// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import ColdWarLoadout from '@/components/generators/black-ops/cold-war/ColdWarLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata (keep as is) ---
export const metadata: Metadata = {
  title: 'Black Ops Cold War Multiplayer Class Generator',
  description:
    'Generate unique random loadouts for Call of Duty: Black Ops Cold War multiplayer. Get new combinations of weapons, perks, wildcards, equipment, and scorestreaks to keep your gameplay exciting.',
  keywords: [
    'Black Ops Cold War random class generator',
    'BOCW multiplayer generator',
    'COD Cold War loadouts',
    'Cold War random perks',
    'Cold War random wildcards',
    'Call of Duty Cold War generator',
    'bocw rcg',
  ],
};

export default function ColdWarGeneratorPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/cold-war', text: 'Black Ops Cold War' },
    { text: 'Multiplayer Generator' },
  ];

  return (
    <PageLayout containerClassName='theme-cold-war'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops Cold War</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ColdWarLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
