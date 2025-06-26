import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import CustomMutations from '@/components/generators/black-ops/four/CustomMutations';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Four Custom Mutations',
  description:
    'Spice up your COD gameplay! Generate unique random custum mutations settings for Black Ops 4 Zombies. Discover new ways to play.',
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

export default function BlackOpsFourCustomMutationsPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='black-ops'>
      <Container>
        <h2 className='text-center mb-4'>
          Black Ops Four Zombies
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Random Class Generator
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <CustomMutations />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
