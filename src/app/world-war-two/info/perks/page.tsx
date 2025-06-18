import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import PerkList from '@/components/info/PerkList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'World War Two Perks',
  description: 'View all perks in World War Two.',
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

export default function WorldWarTwoPerksPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='ww2'>
      <Container>
        <h2 className='text-center mb-4'>
          World War Two
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Perks
        </h2>
        <Row className='shadow-lg p-3 bg-body rounded mb-4'>
          <Col>
            <PerkList game='world-war-two' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
