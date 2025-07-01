// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import PerkList from '@/components/info/PerkList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Call of Duty: WW2 Basic Training Skills Guide | All Perks',
  description:
    'Explore a complete list of all Basic Training skills (perks) available in Call of Duty: WW2 multiplayer. Learn how each skill can enhance your loadout and give you an edge in combat.',
  keywords: [
    'Call of Duty WW2 perks',
    'COD WW2 Basic Training',
    'WW2 perks list',
    'All WW2 perks',
    'WW2 Basic Training skills',
    'Hustle',
    'Gunslinger',
    'Lookout',
    'Ordnance',
    'COD WW2 loadouts',
  ],
};

export default function WorldWarTwoPerksPage() {
  const breadcrumbLinks = [
    { href: '/world-war-two', text: 'World War 2' },
    { href: '/world-war-two/info', text: 'Info Hub' },
    { text: 'Perks' },
  ];

  return (
    <PageLayout containerClassName='theme-ww2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>World War 2</h2>
          <p className={styles.pageSubtitle}>Perks</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <PerkList game='world-war-two' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
