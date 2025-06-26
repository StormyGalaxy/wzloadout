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
    'Spice up your COD gameplay! Generate unique random loadouts for Call of Duty World War Two. Discover new weapons, perks, and gear combinations.',
  keywords: [
    'COD World War Two RCG',
    'world war two random class generator',
    'world war two',
    'world war two rcg',
    'world war two random class generator',
    'class generator',
    'zombies',
    'world war two zombies',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/world-war-two/generator' },
  { label: 'Zombies Generator', href: '/world-war-two/zombies-generator' },
  { label: 'Custom Match', href: '/world-war-two/custom-match' },
  { label: 'Loadout Info', href: '/world-war-two/info' },
  { label: 'Changelog', href: '/changelog' },
];

const badges = [
  { title: 'Equipment', link: '/world-war-two/info/equipment' },
  { title: 'Perks', link: '/world-war-two/info/perks' },
  { title: 'Streaks', link: '/world-war-two/info/streaks' },
  { title: 'Weapons', link: '/world-war-two/info/weapons' },
  { title: 'Zombies Maps', link: '/world-war-two/info/zombies/maps' },
  { title: 'Zombies Perks', link: '/world-war-two/info/zombies/perks' },
  { title: 'Zombies Specials', link: '/world-war-two/info/zombies/specials' },
];

export default function WorldWarTwoInfoPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='ww2'>
      <Container>
        <h2 className='text-center mb-4'>
          World War Two
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Loadout Information
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col lg={7} className='text-center'>
            <p>
              Return to the European theatre with our Call of Duty: WWII information center. Get
              ready for boots-on-the-ground action by diving into the specifics of multiplayer
              combat, including all available <strong>Weapons</strong>, tactical{' '}
              <strong>Equipment</strong>, essential <strong>Perks</strong> (Basic Training), and
              game-changing <strong>Scorestreaks</strong>. If you&apos;re facing the horrors of Nazi
              Zombies, we&apos;ve got you covered with details on the chilling{' '}
              <strong>Zombies Maps</strong>, crucial <strong>Zombies Perks</strong>, and powerful{' '}
              <strong>Zombies Special Abilities</strong> to aid your fight against the undead
              legions. Use the links on this page to access all the intel.
            </p>
          </Col>
          <Col lg={5}>
            <h4 className='text-center'>Links</h4>
            <hr />
            <div className='d-flex flex-wrap gap-2'>
              {badges.map((item) => (
                <Link key={item.title} href={item.link} className='text-decoration-none' passHref>
                  <CodBadge name={item.title} badgeOverwrite='bgWw2' />
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
