import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import PerkList from '@/components/info/PerkList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'World At War Perks',
  description: 'View all perks in World At War.',
  keywords: [
    'COD World At War RCG',
    'COD WAW RCG',
    'waw random class generator',
    'waw',
    'world at war',
    'world at war rcg',
    'world at war random class generator',
    'class generator',
    'zombies',
    'world at war zombies',
    'world at war zombies',
    'world at war rcg',
    'world at war random class generator',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/world-at-war/generator' },

  { label: 'Loadout Info', href: '/world-at-war/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function WorldAtWarPerksPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='waw'>
      <Container>
        <h2 className='text-center mb-4'>
          World At War
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Perks
        </h2>
        <Row className='shadow-lg p-3 bg-body rounded mb-4'>
          <Col>
            <PerkList game='world-at-war' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
