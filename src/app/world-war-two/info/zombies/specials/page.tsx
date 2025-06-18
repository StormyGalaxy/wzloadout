import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ZombiesFieldUpgradeList from '@/components/info/ZombiesFieldUpgradeList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'World War Two Zombies Specials',
  description: 'View all artifacts in World War Two Zombies.',
  keywords: [
    'COD World War Two RCG',
    'world war two random class generator',
    'world war two',
    'world war two rcg',
    'world war two random class generator',
    'class generator',
    'zombies',
    'world war two zombies',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/world-war-two/generator' },
  { label: 'Zombies Generator', href: '/world-war-two/zombies-generator' },
  { label: 'Custom Match', href: '/world-war-two/custom-match' },
  { label: 'Loadout Info', href: '/world-war-two/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function WorldWarTwoZombiesSpecialsPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='ww2'>
      <Container>
        <h2 className='text-center mb-4'>
          World War Two
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Zombies Specials
        </h2>
        <Row className='shadow-lg p-3 bg-body rounded mb-4'>
          <Col>
            <ZombiesFieldUpgradeList game='world-war-two-zombies' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
