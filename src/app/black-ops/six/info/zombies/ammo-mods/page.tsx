import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ZombiesAmmoModList from '@/components/info/ZombiesAmmoModList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 6 Zombies Ammo Mods | All Types & Effects',
  description:
    'Enhance your zombie-slaying power in Call of Duty: Black Ops 6. Get a complete list of all Zombies Ammo Mods and learn about their unique elemental effects.',
  keywords: [
    'Black Ops 6 Zombies Ammo Mods',
    'BO6 Zombies Ammo Mods',
    'Call of Duty Black Ops 6 Zombies',
    'BO6 Ammo Mods list',
    'all ammo mods bo6',
    'Pack-a-Punch mods',
    'BO6 zombies weapons',
  ],
};

export default function BlackOpsSixZombiesAmmoModsPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/six', text: 'Black Ops 6' },
    { href: '/black-ops/six/info', text: 'Info Hub' },
    { text: 'Zombies Ammo Mods' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 6</h2>
          <p className={styles.pageSubtitle}>Zombies Ammo Mods</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ZombiesAmmoModList game='black-ops-six' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
