import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WildcardList from '@/components/info/WildcardList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Warzone Wildcards',
  description: 'View all wildcards in Warzone.',
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

export default function WarzoneWildcardPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='warzone'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Warzone</h2>
          <p className={styles.pageSubtitle}>Wildcards</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <WildcardList game='warzone' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
