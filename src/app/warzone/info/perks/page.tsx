import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import PerkList from '@/components/info/PerkList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Warzone Perks',
  description: 'View all perks in Warzone.',
  keywords: [
    'COD Warzone RCG',
    'warzone random class generator',
    'warzone',
    'warzone rcg',
    'warzone random class generator',
    'class generator',
    'warzone rcg',
    'warzone random class generator',
    'black ops 6',
    'modern warfare 3',
    'modern warfare 2',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Generator', href: '/warzone/generator' },
  { label: 'Where We Droppin?', href: '/warzone/where-we-droppin' },
  { label: 'Loadout Info', href: '/warzone/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function WarzonePerksPage() {
  const dataKeys = ['name', 'type', 'game', 'isDlc'];

  return (
    <PageLayout navLinks={navLinks} headerClassName='warzone'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Warzone</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <PerkList game='warzone' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
