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
  title: 'Call of Duty: Vanguard Zombies Artifacts Guide | All Abilities',
  description:
    'A complete guide to all five powerful Artifacts in Call of Duty: Vanguard Zombies. Learn about the unique abilities of the Energy Mine, Aether Shroud, Ring of Fire, and more to enhance your survival against the undead.',
  keywords: [
    'Call of Duty Vanguard Zombies Artifacts',
    'Vanguard Zombies Artifacts',
    'COD Vanguard Zombies',
    'Vanguard Artifacts guide',
    'Energy Mine',
    'Aether Shroud',
    'Ring of Fire',
    'Frost Blast',
    'Healing Aura',
  ],
};

export default function VanguardZombiesArtifactsPage() {
  const breadcrumbLinks = [
    { href: '/vanguard', text: 'Vanguard' },
    { href: '/vanguard/info', text: 'Info Hub' },
    { text: 'Zombies Artifacts' },
  ];

  return (
    <PageLayout containerClassName='theme-vanguard'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Vanguard</h2>
          <p className={styles.pageSubtitle}>Zombies Artifacts</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ZombiesFieldUpgradeList game='vanguard' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
