import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import WarzoneDropSpot from '@/components/generators/warzone/WarzoneDropSpot';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Warzone - Where We Droppin?',
  description:
    'Spice up your COD gameplay! Randomly roll where you should land in warzone. This includes all current maps including regular battle royal and resurgence.',
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
    'Verdansk',
    'Area 99',
    'Rebirth Island',
    'Urzikstan',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Generator', href: '/warzone/generator' },
  { label: 'Where We Droppin?', href: '/warzone/where-we-droppin' },
  { label: 'Loadout Info', href: '/warzone/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function WhereWeDroppinPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='warzone'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Warzone</h2>
          <p className={styles.pageSubtitle}>Where We Droppin?</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <WarzoneDropSpot />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
