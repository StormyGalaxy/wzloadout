// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import InfiniteWarfareLoadout from '@/components/generators/infinite-warfare/InfiniteWarfareLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Infinite Warfare Random Class Generator | Multiplayer Loadouts',
  description:
    'Forge your loadout for futuristic combat in Call of Duty: Infinite Warfare. Generate random classes with unique Combat Rigs, weapon variants, perks, and equipment.',
  keywords: [
    'Infinite Warfare random class generator',
    'IW loadout generator',
    'IW random loadout',
    'Call of Duty Infinite Warfare',
    'IW multiplayer',
    'Infinite Warfare Combat Rigs',
    'IW weapon variants',
    'COD IW RCG',
  ],
};

export default function InfiniteWarfareGeneratorPage() {
  const breadcrumbLinks = [
    { href: '/infinite-warfare', text: 'Infinite Warfare' },
    { text: 'Multiplayer Generator' },
  ];

  return (
    <PageLayout containerClassName='theme-infinite-warfare'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Infinite Warfare</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} textOutline={true} className='mb-4' />
            <InfiniteWarfareLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
