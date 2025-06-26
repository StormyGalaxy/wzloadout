import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import ModernWarfareTwoLoadout from '@/components/generators/modern-warfare/ModernWarfareTwoLoadout';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare Two',
  description:
    'Spice up your COD gameplay! Generate unique random loadouts for Modern Warfare Two. Discover new weapons, perks, and gear combinations.',
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

export default function ModernWarfareTwoGeneratorPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='mw2'>
      <Container>
        <h2 className='text-center mb-4'>
          Modern Warfare Two
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Random Class Generator
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <ModernWarfareTwoLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
