import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WeaponList from '@/components/info/WeaponList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Infinite Warfare Weapons',
  description: 'View all weapons in Infinite Warfare.',
  keywords: [
    'COD Infinite Warfare RCG',
    'COD IW RCG',
    'iw random class generator',
    'iw',
    'infinite warfare',
    'infinite warfare rcg',
    'infinite warfare random class generator',
    'infinite warfare rcg',
    'infinite warfare random class generator',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/infinite-warfare/generator' },
  { label: 'Loadout Info', href: '/infinite-warfare/info' },
  { label: 'Changelog', href: '/changelog' },
];

export default function InfiniteWarfareWeaponsPage() {
  const dataKeys = ['name', 'type', 'game', 'no_attach', 'no_attach_info'];

  return (
    <PageLayout navLinks={navLinks} headerClassName='infinite-warfare'>
      <Container>
        <h2 className='text-center mb-4'>
          Infinite Warfare
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Weapons
        </h2>
        <Row className='shadow-lg p-3 bg-body rounded mb-4'>
          <Col>
            <WeaponList game='infinite-warfare' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
