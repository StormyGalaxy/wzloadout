import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ZombiesGobblegumList from '@/components/info/ZombiesGobblegumList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Four Zombies Talismans',
  description: 'View all talismans in Black Ops Four Zombies.',
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

export default function BlackOpsFourZombiesTalismansPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='black-ops'>
      <Container>
        <h2 className='text-center mb-4'>
          Black Ops Four
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Zombies Talismans
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <ZombiesGobblegumList game='black-ops-four-zombies-talismans' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
