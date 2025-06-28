import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ZombiesAmmoModList from '@/components/info/ZombiesAmmoModList';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 6 Zombies Ammo Mods',
  description: 'View all ammo mods in Black Ops 6 Zombies.',
  keywords: [
    'COD Black Ops 6 RCG',
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

export default function BlackOpsSixZombiesAmmoModsPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 6</h2>
          <p className={styles.pageSubtitle}>Zombies Ammo Mods</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <ZombiesAmmoModList game='black-ops-six' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
