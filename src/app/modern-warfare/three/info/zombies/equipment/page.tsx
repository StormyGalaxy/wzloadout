import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import EquipmentList from '@/components/info/EquipmentList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare Three Zombies Equipment',
  description: 'View all equipment in Modern Warfare Three Zombies.',
  keywords: [
    'COD Modern Warfare Three RCG',
    'modern warfare three random class generator',
    'modern warfare three',
    'modern warfare three rcg',
    'class generator',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/modern-warfare/three/generator' },
  { label: 'Zombies Generator', href: '/modern-warfare/three/zombies-generator' },
  { label: 'Loadout Info', href: '/modern-warfare/three/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function ModernWarfareThreeEquipmentPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='modern-warfare'>
      <Container>
        <h2 className='text-center mb-4'>
          Modern Warfare Three
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Zombies Equipment
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <EquipmentList game='modern-warfare-three-zombies' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
