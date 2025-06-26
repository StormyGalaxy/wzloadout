import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import BlackOpsSixZombiesLoadout from '@/components/generators/black-ops/six/BlackOpsSixZombiesLoadout';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Six Zombies',
  description:
    'Spice up your COD Zombies gameplay! Generate unique random loadouts for Call of Duty Black Ops Six Zombies. Discover new weapons, perks, and gear combinations.',
  keywords: [
    'COD Black Ops Six RCG',
    'black ops six random class generator',
    'black ops six',
    'black ops six rcg',
    'class generator',
    'zombies',
    'treyarch zombies',
    'black ops six zombies',
    'black ops six rcg',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/black-ops/six/generator' },
  { label: 'Zombies Generator', href: '/black-ops/six/zombies-generator' },
  { label: 'Loadout Info', href: '/black-ops/six/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function BlackOpsSixZombiesGeneratorPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='black-ops'>
      <Container>
        <h2 className='text-center mb-4'>
          Black Ops Six Zombies
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Random Class Generator
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <BlackOpsSixZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
