import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import EquipmentList from '@/components/info/EquipmentList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Three Equipment',
  description: 'View all equipment in Black Ops Three.',
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

export default function BlackOpsThreeEquipmentPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <h2 className='text-center mb-4'>
          Black Ops Three
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Equipment
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <EquipmentList game='black-ops-three' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
