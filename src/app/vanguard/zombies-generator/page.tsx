import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import VanguardZombiesLoadout from '@/components/generators/vanguard/VanguardZombiesLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Call of Duty: Vanguard Zombies Random Loadout Generator',
  description:
    'Generate unique, random loadouts for Call of Duty: Vanguard Zombies. Challenge yourself with new combinations of weapons, covenants, and artifacts to survive the undead hordes in Der Anfang and Terra Maledicta.',
  keywords: [
    'Call of Duty Vanguard Zombies',
    'Vanguard Zombies random loadout',
    'COD Vanguard Zombies generator',
    'Vanguard Zombies loadouts',
    'Der Anfang',
    'Terra Maledicta',
    'Vanguard covenants',
    'Vanguard artifacts',
  ],
};

export default function VanguardZombiesGeneratorPage() {
  const breadcrumbLinks = [{ href: '/vanguard', text: 'Vanguard' }, { text: 'Zombies Generator' }];

  return (
    <PageLayout containerClassName='theme-vanguard'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Vanguard Zombies</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <VanguardZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
