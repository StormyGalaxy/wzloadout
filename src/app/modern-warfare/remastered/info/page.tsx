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
    'Spice up your COD gameplay! Generate unique random loadouts for Modern Warfare Remastered. Discover new weapons, perks, and gear combinations.',
  keywords: [
    'COD Modern Warfare Remastered RCG',
    'modern warfare remastered random class generator',
    'modern warfare remastered',
    'modern warfare remastered rcg',
    'class generator',
  ],
};

const badges = [
  { title: 'Equipment', link: '/modern-warfare/remastered/info/equipment' },
  { title: 'Perks', link: '/modern-warfare/remastered/info/perks' },
  { title: 'Weapons', link: '/modern-warfare/remastered/info/weapons' },
];

export default function ModernWarfareRemasteredInfoPage() {
  return (
    <PageLayout containerClassName='theme-mwr'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare Remastered</h2>
          <p className={styles.pageSubtitle}>Loadout Information</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col lg={7} className='text-center'>
            <p>
              Relive a groundbreaking era of Call of Duty with our resources for Modern Warfare
              Remastered. This section brings you the essential details for the remastered classic
              that defined modern online combat. Find comprehensive lists and stats for all the
              iconic <strong>Weapons</strong>, tactical <strong>Equipment</strong>, and
              game-changing <strong>Perks</strong> available in multiplayer. Use the links on this
              page to master the arsenal of the original Modern Warfare.
            </p>
          </Col>
          <Col lg={5}>
            <h4 className='text-center'>Links</h4>
            <hr />
            <div className='d-flex flex-wrap gap-2'>
              {badges.map((item) => (
                <Link key={item.title} href={item.link} className='text-decoration-none' passHref>
                  <CodBadge name={item.title} variant='success' />
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
