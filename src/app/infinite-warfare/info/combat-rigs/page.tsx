import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import SpecialistList from '@/components/info/SpecialistList';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Infinite Warfare Combat Rigs | All Rigs, Payloads & Traits',
  description:
    'Choose your suit of armor for futuristic warfare. Get a complete guide to all six Combat Rigs in Call of Duty: Infinite Warfare, with detailed information on their unique Payloads and persistent Traits.',
  keywords: [
    'Infinite Warfare Combat Rigs',
    'IW Combat Rigs',
    'Call of Duty Infinite Warfare',
    'IW Rigs',
    'All Combat Rigs IW',
    'Infinite Warfare Payloads',
    'Infinite Warfare Traits',
    'IW classes',
  ],
};

export default function InfiniteWarfareSpecialistsPage() {
  const breadcrumbLinks = [
    { href: '/infinite-warfare', text: 'Infinite Warfare' },
    { href: '/infinite-warfare/info', text: 'Info Hub' },
    { text: 'Specialists' },
  ];

  return (
    <PageLayout containerClassName='theme-infinite-warfare'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Infinite Warfare</h2>
          <p className={styles.pageSubtitle}>Specialists</p>
        </div>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} textOutline={true} className='mb-4' />
            <SpecialistList game='infinite-warfare' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
