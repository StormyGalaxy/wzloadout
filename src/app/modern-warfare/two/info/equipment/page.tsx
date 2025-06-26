import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import EquipmentList from '@/components/info/EquipmentList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare Two Equipment',
  description: 'View all equipment in Modern Warfare Two.',
  keywords: [
    'COD Modern Warfare Two RCG',
    'modern warfare two random class generator',
    'modern warfare two',
    'modern warfare two rcg',
    'class generator',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/modern-warfare/two/generator' },
  { label: 'Loadout Info', href: '/modern-warfare/two/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function ModernWarfareTwoEquipmentPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='mw2'>
      <Container>
        <h2 className='text-center mb-4'>
          Modern Warfare Two
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Equipment
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <EquipmentList game='modern-warfare-two' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
