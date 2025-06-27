import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
import Link from 'next/link';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import CodBadge from '@/components/CodBadge';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Loadout Information',
  description:
    'Spice up your COD gameplay! Generate unique random loadouts for Call of Duty Black Ops Six. Discover new weapons, perks, and gear combinations.',
  keywords: [
    'COD Black Ops Six RCG',
    'black ops six random class generator',
    'black ops six',
    'black ops six rcg',
    'class generator',
    'zombies',
    'treyarch zombies',
    'black ops six zombies',
    'black ops six rcg',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/black-ops/six/generator' },
  { label: 'Zombies Generator', href: '/black-ops/six/zombies-generator' },
  { label: 'Loadout Info', href: '/black-ops/six/info' },
  { label: 'Changelog', href: '/changelog' },
];

const badges = [
  { title: 'Equipment', link: '/black-ops/six/info/equipment' },
  { title: 'Perks', link: '/black-ops/six/info/perks' },
  { title: 'Streaks', link: '/black-ops/six/info/streaks' },
  { title: 'Weapons', link: '/black-ops/six/info/weapons' },
  { title: 'Wildcards', link: '/black-ops/six/info/wildcards' },
  { title: 'Zombies - Ammo Mods', link: '/black-ops/six/info/zombies/ammo-mods' },
  { title: 'Zombies - Augments', link: '/black-ops/six/info/zombies/augments' },
  { title: 'Zombies - Field Upgrades', link: '/black-ops/six/info/zombies/field-upgrades' },
  { title: 'Zombies - Gobblegums', link: '/black-ops/six/info/zombies/gobblegums' },
  { title: 'Zombies - Maps', link: '/black-ops/six/info/zombies/maps' },
];

export default function BlackOpsSixInfoPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <h2 className='text-center mb-4'>
          Black Ops Six
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Loadout Information
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col lg={7} className='text-center'>
            <p>
              Prepare for clandestine operations in the Gulf War era with our Call of Duty: Black
              Ops 6 intelligence center. This section provides the vital data you need for the
              latest Black Ops installment. Master the multiplayer arena with detailed information
              on <strong>Weapons</strong>, tactical <strong>Equipment</strong>, essential{' '}
              <strong>Perks</strong>, powerful <strong>Wildcards</strong>, and game-changing{' '}
              <strong>Streaks</strong>. For Zombies aficionados, get ready for the return of
              round-based chaos! Explore guides on the launch <strong>Maps</strong>, classic{' '}
              <strong>GobbleGums</strong>, essential <strong>Ammo Mods</strong>, rechargeable{' '}
              <strong>Field Upgrades</strong>, and the <strong>Augments</strong> that modify them.
              Find all the links on this page.
            </p>
          </Col>
          <Col lg={5}>
            <h4 className='text-center'>Links</h4>
            <hr />
            <div className='d-flex flex-wrap gap-2'>
              {badges.map((item) => (
                <Link key={item.title} href={item.link} className='text-decoration-none' passHref>
                  <CodBadge name={item.title} badgeOverwrite='bgBlackOps' />
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
