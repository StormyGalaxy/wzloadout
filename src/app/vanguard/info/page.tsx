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
    'Spice up your COD gameplay! Generate unique random loadouts for Call of Duty Vanguard. Discover new weapons, perks, and gear combinations.',
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

const badges = [
  { title: 'Equipment', link: '/vanguard/info/equipment' },
  { title: 'Perks', link: '/vanguard/info/perks' },
  { title: 'Streaks', link: '/vanguard/info/streaks' },
  { title: 'Weapons', link: '/vanguard/info/weapons' },
  { title: 'Zombies Artifacts', link: '/vanguard/info/zombies/artifacts' },
  { title: 'Zombies Maps', link: '/vanguard/info/zombies/maps' },
];

export default function VanguardInfoPage() {
  return (
    <PageLayout containerClassName='theme-vanguard'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Vanguard</h2>
          <p className={styles.pageSubtitle}>Loadout Information</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col lg={7} className='text-center'>
            <p>
              Welcome to your central hub for all essential Call of Duty: Vanguard data! Whether
              you&apos;re fine-tuning your multiplayer strategy or preparing to face the undead
              hordes, we&apos;ve compiled the information you need. Our loadout section details
              every multiplayer <strong>weapon</strong>, <strong>perk</strong>, piece of{' '}
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
