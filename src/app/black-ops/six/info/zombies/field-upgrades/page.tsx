import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ZombiesFieldUpgradeList from '@/components/info/ZombiesFieldUpgradeList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 6 Zombies Field Upgrades | All Abilities & Tiers',
  description:
    'Turn the tide against the horde in Call of Duty: Black Ops 6 Zombies. Get a complete guide to all Field Upgrades, including their abilities, tiers, and cooldown times.',
  keywords: [
    'Black Ops 6 Zombies Field Upgrades',
    'BO6 Zombies Field Upgrades',
    'Call of Duty Black Ops 6 Zombies',
    'BO6 Field Upgrades list',
    'all field upgrades bo6',
    'zombies field upgrades',
    'BO6 zombies abilities',
  ],
};

export default function BlackOpsSixZombiesFieldUpgradesPage() {
  const dataKeys = ['name', 'type', 'game', 'isDlc'];
  const breadcrumbLinks = [
    { href: '/black-ops/six', text: 'Black Ops 6' },
    { href: '/black-ops/six/info', text: 'Info Hub' },
    { text: 'Zombies Field Upgrades' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 6</h2>
          <p className={styles.pageSubtitle}>Zombies Field Upgrades</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ZombiesFieldUpgradeList game='black-ops-six' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
