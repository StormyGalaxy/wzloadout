// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ZombiesMapsList from '@/components/info/ZombiesMapsList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'World War 2 Zombies Maps',
  description: 'View all maps in World War 2 Zombies.',
  keywords: [
    'COD World War 2 RCG',
    'world war two random class generator',
    'world war two',
    'world war two rcg',
    'world war two random class generator',
    'class generator',
    'zombies',
    'world war two zombies',
  ],
};

export default function WorldWarTwoZombiesMapsPage() {
  const breadcrumbLinks = [
    { href: '/world-war-two', text: 'World War 2' },
    { href: '/world-war-two/info', text: 'Info Hub' },
    { text: 'Zombies Maps' },
  ];

  return (
    <PageLayout containerClassName='theme-ww2'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>World War 2</h2>
          <p className={styles.pageSubtitle}>Zombies Maps</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ZombiesMapsList game='world-war-two-zombies' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
