import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import BlackOpsFourLoadout from '@/components/generators/black-ops/four/BlackOpsFourLoadout';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Four',
  description:
    'Spice up your COD gameplay! Generate unique random loadouts for Call of Duty Black Ops Four. Discover new weapons, perks, and gear combinations.',
  keywords: [
    'COD Black Ops Four RCG',
    'black ops four random class generator',
    'black ops four',
    'black ops four rcg',
    'class generator',
    'zombies',
    'treyarch zombies',
    'black ops four zombies',
    'black ops four rcg',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/black-ops/four/generator' },
  { label: 'Zombies Generator', href: '/black-ops/four/zombies/generator' },
  { label: 'Zombies Custom Mutations', href: '/black-ops/four/zombies/custom-mutations' },
  { label: 'Loadout Info', href: '/black-ops/four/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function BlackOpsFourGeneratorPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='black-ops'>
      <Container>
        <h2 className='text-center mb-4'>
          Black Ops Four
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Random Class Generator
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <BlackOpsFourLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
