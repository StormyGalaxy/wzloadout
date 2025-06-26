import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import EquipmentList from '@/components/info/EquipmentList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare Remastered Equipment',
  description: 'View all equipment in Modern Warfare Remastered.',
  keywords: [
    'COD Modern Warfare Remastered RCG',
    'modern warfare remastered random class generator',
    'modern warfare remastered',
    'modern warfare remastered rcg',
    'class generator',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/modern-warfare/remastered/generator' },
  { label: 'Loadout Info', href: '/modern-warfare/remastered/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function ModernWarfareRemasteredEquipmentPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='mwr'>
      <Container>
        <h2 className='text-center mb-4'>
          Modern Warfare Remastered
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Equipment
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <EquipmentList game='modern-warfare-remastered' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
