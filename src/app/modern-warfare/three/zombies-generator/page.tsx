import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import ModernWarfareThreeZombiesLoadout from '@/components/generators/modern-warfare/three/ModernWarfareThreeZombiesLoadout';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare Zombies',
  description:
    'Spice up your COD Zombies gameplay! Generate unique random loadouts for Modern Warfare Three. Discover new weapons, perks, and gear combinations.',
  keywords: [
    'COD Modern Warfare Three RCG',
    'modern warfare three random class generator',
    'modern warfare three',
    'modern warfare three rcg',
    'class generator',
    'zombies',
    'Infinity Ward zombies',
    'modern warfare zombies',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/modern-warfare/three/generator' },
  { label: 'Zombies Generator', href: '/modern-warfare/three/zombies-generator' },
  { label: 'Loadout Info', href: '/modern-warfare/three/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function ModernWarfareThreeZombiesGeneratorPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='modern-warfare'>
      <Container>
        <h2 className='text-center mb-4'>
          Modern Warfare Three Zombies
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Random Class Generator
        </h2>
        <Row className='shadow-lg p-3 bg-body rounded mb-4'>
          <Col className='mx-auto'>
            <ModernWarfareThreeZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
