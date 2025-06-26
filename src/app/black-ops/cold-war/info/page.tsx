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
    'Spice up your COD gameplay! Generate unique random loadouts for Call of Duty Black Ops Cold War. Discover new weapons, perks, and gear combinations.',
  keywords: [
    'COD Black Ops Cold War RCG',
    'black ops cold war random class generator',
    'black ops cold war',
    'black ops cold war rcg',
    'class generator',
    'zombies',
    'treyarch zombies',
    'black ops cold war zombies',
    'black ops cold war rcg',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/black-ops/cold-war/generator' },
  { label: 'Zombies Generator', href: '/black-ops/cold-war/zombies-generator' },
  { label: 'Loadout Info', href: '/black-ops/cold-war/info' },
  { label: 'Changelog', href: '/changelog' },
];

const badges = [
  { title: 'Equipment', link: '/black-ops/cold-war/info/equipment' },
  { title: 'Perks', link: '/black-ops/cold-war/info/perks' },
  { title: 'Streaks', link: '/black-ops/cold-war/info/streaks' },
  { title: 'Weapons', link: '/black-ops/cold-war/info/weapons' },
  { title: 'Wildcards', link: '/black-ops/cold-war/info/wildcards' },
  { title: 'Zombies - Field Upgrades', link: '/black-ops/cold-war/info/zombies/field-upgrades' },
  { title: 'Zombies - Maps', link: '/black-ops/cold-war/info/zombies/maps' },
];

export default function ColdWarInfoPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='cold-war'>
      <Container>
        <h2 className='text-center mb-4'>
          Black Ops Cold War
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Loadout Information
        </h2>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col lg={7} className='text-center'>
            <p>
              Welcome to your central hub for all essential Call of Duty: Black Ops Cold War data!
              Whether you&apos;re fine-tuning your multiplayer strategy or preparing to face the
              undead hordes, we&apos;ve compiled the information you need. Our loadout section
              details every multiplayer <strong>weapon</strong>, <strong>perk</strong>, piece of{' '}
              <strong>equipment</strong>, <strong>wildcard</strong>, and <strong>killstreak</strong>{' '}
              available. For Zombies slayers, explore the available <strong>maps</strong>, discover
              the powerful <strong>Artifacts</strong> to aid your survival, and learn about the
              various <strong>Covenants</strong> you can acquire at the Altar, including those that
              function like <strong>ammo mods</strong>, to customize your build and overcome the
              darkness. Find all the links on this page to get started.
            </p>
          </Col>
          <Col lg={5}>
            <h4 className='text-center'>Links</h4>
            <hr />
            <div className='d-flex flex-wrap gap-2'>
              {badges.map((item) => (
                <Link key={item.title} href={item.link} className='text-decoration-none' passHref>
                  <CodBadge name={item.title} variant='danger' />
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
