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
    'Spice up your COD gameplay! Generate unique random loadouts for Call of Duty World At War. Discover new weapons, perks, and gear combinations.',
  keywords: [
    'COD World At War RCG',
    'COD WAW RCG',
    'waw random class generator',
    'waw',
    'world at war',
    'world at war rcg',
    'world at war random class generator',
    'class generator',
    'zombies',
    'world at war zombies',
    'world at war zombies',
    'world at war rcg',
    'world at war random class generator',
  ],
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Multiplayer Generator', href: '/world-at-war/generator' },
  { label: 'Loadout Info', href: '/world-at-war/info' },
  { label: 'Changelog', href: '/changelog' },
];

const badges = [
  { title: 'Equipment', text: '', link: '/world-at-war/info/equipment' },
  { title: 'Perks', text: '', link: '/world-at-war/info/perks' },
  { title: 'Weapons', text: '', link: '/world-at-war/info/weapons' },
];

export default function WorldAtWarInfoPage() {
  return (
    <PageLayout navLinks={navLinks} headerClassName='waw'>
      <Container>
        <h2 className='text-center mb-4'>
          World At War
          <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
          <br className='d-block d-sm-none' />
          Loadout Information
        </h2>
        <Row className='shadow-lg p-3 bg-body rounded mb-4'>
          <Col lg={7} className='text-center'>
            <p>
              Step back into the gritty battlefields of World War II with our Call of Duty: World at
              War data resource. Here you&apos;ll find essential information to refine your tactics
              for this classic title. Access detailed breakdowns of all available multiplayer{' '}
              <strong>weapons</strong>, <strong>perks</strong>, and <strong>equipment</strong> used
              by the soldiers of the era. Use the links on this page to explore the gear that
              defined the fight in CoD: WaW.
            </p>
          </Col>
          <Col lg={5}>
            <h4 className='text-center'>Links</h4>
            <hr />
            <div className='d-flex flex-wrap gap-2'>
              {badges.map((item) => (
                <Link key={item.title} href={item.link} className='text-decoration-none' passHref>
                  <CodBadge name={item.title} variant='secondary' />
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
