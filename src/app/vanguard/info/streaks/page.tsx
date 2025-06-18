import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import StreakList from '@/components/info/StreakList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Vanguard Streaks',
  description: 'View all streaks in Vanguard.',
  keywords: [
    'COD Vanguard RCG',
    'vanguard random class generator',
    'vanguard',
    'vanguard rcg',
    'vanguard random class generator',
    'class generator',
    'zombies',
    'treyarch zombies',
    'vanguard zombies',
    'vanguard rcg',
    'vanguard random class generator',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/vanguard/generator' },
  { label: 'Zombies Generator', href: '/vanguard/zombies-generator' },
  { label: 'Loadout Info', href: '/vanguard/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function VanguardStreaksPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='vanguard'>
      <Container>
        <h2 className='text-center mb-4'>
          Vanguard
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Streaks
        </h2>
        <Row className='shadow-lg p-3 bg-body rounded mb-4'>
          <Col>
            <StreakList game='vanguard' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
