import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Loadout ---
import ModernWarfareRemasteredLoadout from '@/components/generators/modern-warfare/ModernWarfareRemasteredLoadout';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare Remastered Random Class Generator - COD MWR Loadouts',
  description:
    'Generate unique random classes and loadouts for Call of Duty: Modern Warfare Remastered. Challenge yourself with new weapon, attachment, perk, and equipment combinations to spice up your multiplayer experience.',
  keywords: [
    'Call of Duty Modern Warfare Remastered',
    'Modern Warfare Remastered Random Class Generator',
    'MWR Random Class Generator',
    'COD MWR Loadouts',
    'Random Loadout Generator MWR',
    'Modern Warfare Remastered Perks',
    'Modern Warfare Remastered Weapons',
    'COD MWR Generator',
  ],
};

export default function ModernWarfareRemasteredGeneratorPage() {
  const breadcrumbLinks = [
    { href: '/modern-warfare/remastered', text: 'Modern Warfare Remastered' },
    { text: 'Multiplayer Generator' },
  ];

  return (
    <PageLayout containerClassName='theme-mwr'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Modern Warfare Remastered</h2>
          <p className={styles.pageSubtitle}>Random Class Generator</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <ModernWarfareRemasteredLoadout />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
