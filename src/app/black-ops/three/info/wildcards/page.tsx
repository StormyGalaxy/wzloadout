import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WildcardList from '@/components/info/WildcardList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Three Wildcards',
  description: 'View all wildcards in Black Ops Three.',
  keywords: [
    'COD Black Ops Three RCG',
    'black ops three random class generator',
    'black ops three',
    'black ops three rcg',
    'class generator',
    'zombies',
    'treyarch zombies',
    'black ops three zombies',
    'black ops three rcg',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/black-ops/three/generator' },
  { label: 'Loadout Info', href: '/black-ops/three/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function BlackOpsThreeWildcardPage() {
  const dataKeys = ['name', 'description', 'type', 'game'];
  return (
    <PageLayout navLinks={navLinks} headerClassName='black-ops'>
      <Container>
        <h2 className='text-center mb-4'>
          Black Ops Three
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Wildcards
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <WildcardList game='black-ops-three' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
