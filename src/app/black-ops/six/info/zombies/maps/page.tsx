import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ZombiesMapsList from '@/components/info/ZombiesMapsList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Six Zombies Maps',
  description: 'View all maps in Black Ops Six Zombies.',
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

export default function BlackOpsSixZombiesMapsPage() {
  const dataKeys = ['name', 'type', 'game', 'isDlc'];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <h2 className='text-center mb-4'>
          Black Ops Six
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Zombies Maps
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <ZombiesMapsList game='black-ops-six-zombies' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
