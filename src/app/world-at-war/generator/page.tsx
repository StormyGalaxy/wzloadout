import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import WorldAtWarLoadout from '@/components/generators/world-at-war/WorldAtWarLoadout';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'World At War',
  description:
    'Spice up your COD gameplay! Generate unique random loadouts for Call of Duty World At War. Discover new weapons, perks, and gear combinations.',
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

export default function WorldAtWarGeneratorPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='waw'>
      <Container>
        <h2 className='text-center mb-4'>
          World At War
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Random Class Generator
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <WorldAtWarLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
