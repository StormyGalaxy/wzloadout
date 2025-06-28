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
    'Spice up your COD gameplay! Generate unique random loadouts for Call of Duty Black Ops 3. Discover new weapons, perks, and gear combinations.',
  keywords: [
    'COD Black Ops 3 RCG',
    'black ops three random class generator',
    'black ops three',
    'black ops three rcg',
    'class generator',
    'zombies',
    'treyarch zombies',
    'black ops three zombies',
    'black ops three rcg',
  ],
};

const badges = [
  { title: 'Equipment', link: '/black-ops/three/info/equipment' },
  { title: 'Perks', link: '/black-ops/three/info/perks' },
  { title: 'Specialists', link: '/black-ops/three/info/specialists' },
  { title: 'Streaks', link: '/black-ops/three/info/streaks' },
  { title: 'Weapons', link: '/black-ops/three/info/weapons' },
  { title: 'Wildcards', link: '/black-ops/three/info/wildcards' },
];

export default function BlackOpsThreeInfoPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 3</h2>
          <p className={styles.pageSubtitle}>Loadout Information</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col lg={7} className='text-center'>
            <p>
              Dive into the tactical multiplayer and rich Zombies universe of Call of Duty: Black
              Ops 4 with our comprehensive data hub. This section covers the core components of this
              unique title, known for its Specialist system and distinct gameplay mechanics. For
              Multiplayer, explore detailed stats on <strong>Weapons</strong>, essential{' '}
              <strong>Perks</strong>, powerful <strong>Specialists</strong> and their abilities,
              tactical <strong>Equipment</strong>, game-changing <strong>Wildcards</strong>, and
              devastating <strong>Scorestreaks</strong>. For Zombies fans, delve into the Chaos and
              Aether stories with guides on all <strong>Maps</strong>, classic{' '}
              <strong>Perks</strong>, consumable <strong>Elixirs</strong>, and persistent buff{' '}
              <strong>Talismans</strong>. Find all the links you need below.
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
