import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import WarzoneLoadout from '@/components/generators/warzone/WarzoneLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Warzone Random Loadout Generator | COD MW3, MW2 & Black Ops 6',
  description:
    'Challenge yourself with a unique, randomly generated loadout for Call of Duty: Warzone. Discover new meta and off-meta combinations of weapons, attachments, perks, and equipment from Modern Warfare II, Modern Warfare III, and Black Ops 6.',
  keywords: [
    'Warzone random loadout generator',
    'COD Warzone RCG',
    'Warzone random class generator',
    'Warzone meta',
    'Best Warzone loadouts',
    'Warzone randomizer',
    'Call of Duty Warzone',
    'Black Ops 6 Warzone',
    'Modern Warfare 3 Warzone',
    'MW2 weapons',
  ],
};

export default function WarzoneGeneratorPage() {
  const breadcrumbLinks = [{ href: '/warzone', text: 'Warzone' }, { text: 'Class Generator' }];

  return (
    <PageLayout containerClassName='theme-warzone'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Warzone</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <WarzoneLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
