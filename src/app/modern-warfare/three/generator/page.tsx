import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import ModernWarfareThreeLoadout from '@/components/generators/modern-warfare/three/ModernWarfareThreeLoadout';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare Three',
  description:
    'Spice up your COD gameplay! Generate unique random loadouts for Modern Warfare Three. Discover new weapons, perks, and gear combinations.',
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

export default function ModernWarfareThreeGeneratorPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='modern-warfare'>
      <Container>
        <h2 className='text-center mb-4'>
          Modern Warfare Three
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Random Class Generator
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <ModernWarfareThreeLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
