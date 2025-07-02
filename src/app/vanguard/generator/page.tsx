import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import VanguardLoadout from '@/components/generators/vanguard/VanguardLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Call of Duty: Vanguard Random Class Generator | COD Loadouts',
  description:
    'Challenge yourself with unique, randomly generated loadouts for Call of Duty: Vanguard. Discover new combinations of weapons, attachments, perks, and equipment to keep your multiplayer gameplay fresh and exciting.',
  keywords: [
    'Call of Duty Vanguard',
    'Vanguard random class generator',
    'COD Vanguard RCG',
    'Vanguard loadout generator',
    'Vanguard random loadouts',
    'Vanguard perks',
    'Vanguard weapons',
    'COD Vanguard generator',
  ],
};

export default function VanguardGeneratorPage() {
  const breadcrumbLinks = [
    { href: '/vanguard', text: 'Vanguard' },
    { text: 'Multiplayer Generator' },
  ];

  return (
    <PageLayout containerClassName='theme-vanguard'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Vanguard</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <VanguardLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
