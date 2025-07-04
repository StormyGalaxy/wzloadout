import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import BlackOpsThreeLoadout from '@/components/generators/black-ops/three/BlackOpsThreeLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 3 Random Class Generator | Multiplayer Loadouts',
  description:
    'Create unique random classes for Call of Duty: Black Ops 3 multiplayer. Use the Pick 10 system to get random weapons, perks, attachments, and Specialist abilities.',
  keywords: [
    'Black Ops 3 random class generator',
    'BO3 loadout generator',
    'BO3 random loadout',
    'Call of Duty Black Ops 3',
    'BO3 multiplayer',
    'Pick 10 system',
    'BO3 Specialists',
    'black ops three rcg',
  ],
};

export default function BlackOpsThreeGeneratorPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/three', text: 'Black Ops 3' },
    { text: 'Multiplayer Generator' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 3</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <BlackOpsThreeLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
