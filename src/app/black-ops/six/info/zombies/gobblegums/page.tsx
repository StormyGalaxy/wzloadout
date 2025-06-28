import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ZombiesGobblegumList from '@/components/info/ZombiesGobblegumList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 6 Zombies Gobblegums | All Types & Effects',
  description:
    'Chew on this! Get a complete list of all Gobblegums in Call of Duty: Black Ops 6 Zombies. Learn about every Classic, Whimsical, Rare, Epic, and Legendary Gobblegum and its unique in-game effect.',
  keywords: [
    'Black Ops 6 Gobblegums',
    'BO6 Zombies Gobblegums',
    'Call of Duty Black Ops 6 Zombies',
    'BO6 Gobblegum list',
    'all gobblegums bo6',
    'classic gobblegums',
    'whimsical gobblegums',
    'BO6 zombies perks',
  ],
};

export default function BlackOpsSixZombiesGobblegumsPage() {
  const dataKeys = ['name', 'type', 'game', 'isDlc'];
  const breadcrumbLinks = [
    { href: '/black-ops/six', text: 'Black Ops 6' },
    { href: '/black-ops/six/info', text: 'Info Hub' },
    { text: 'Zombies Gobblegums' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 6</h2>
          <p className={styles.pageSubtitle}>Zombies Gobblegums</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ZombiesGobblegumList game='black-ops-six-zombies' dataKeys={dataKeys} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
