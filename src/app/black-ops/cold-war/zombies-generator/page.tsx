import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import ColdWarZombiesLoadout from '@/components/generators/black-ops/cold-war/ColdWarZombiesLoadout';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Cold War Zombies',
  description:
    'Spice up your COD Zombies gameplay! Generate unique random loadouts for Call of Duty Black Ops Cold War Zombies. Discover new weapons, perks, and gear combinations.',
  keywords: [
    'COD Black Ops Cold War RCG',
    'black ops cold war random class generator',
    'black ops cold war',
    'black ops cold war rcg',
    'class generator',
    'zombies',
    'treyarch zombies',
    'black ops cold war zombies',
    'black ops cold war rcg',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/black-ops/cold-war/generator' },
  { label: 'Zombies Generator', href: '/black-ops/cold-war/zombies-generator' },
  { label: 'Loadout Info', href: '/black-ops/cold-war/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function ColdWarZombiesGeneratorPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='cold-war'>
      <Container>
        <h2 className='text-center mb-4'>
          Black Ops Cold War Zombies
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Random Class Generator
        </h2>
        <Row className='shadow-lg p-3 bg-body rounded mb-4'>
          <Col className='mx-auto'>
            <ColdWarZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
