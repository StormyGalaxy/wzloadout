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
  title: 'Black Ops 4 Zombies Perks',
  description:
    "A complete guide to all perks available in Call of Duty: Black Ops 4 Zombies. Learn about each perk's unique effect and location in the new four-perk system.",
  keywords: [
    'Black Ops 4 Zombies Perks',
    'BO4 Zombies Perks',
    'COD Zombies Perks',
    'Treyarch Zombies',
    'Zombies perk system',
    'best zombies perks',
    // Perk Slot Names
    'Danu Perk',
    'Ra Perk',
    'Zeus Perk',
    'Odin Perk',
    // Specific Perk Names
    'Timeslip',
    'Quick Revive',
    'Death Perception',
    'Stamin-Up',
    'Electric Burst',
    'Dying Wish',
    'Stone Cold Stronghold',
    'Victorious Tortoise',
    'Deadshot Dealer',
    'Bandolier Bandit',
    "Winter's Wail",
    'Mule Kick',
    'PhD Slider',
    'Ethereal Razor',
    'Zombshell',
    'Blaze Phase',
    'Blood Wolf Bite',
    'Secret Sauce',
  ],
};

export default function BlackOpsFourPerksPage() {
  const breadcrumbLinks = [
    { href: '/black-ops/four', text: 'Black Ops 4' },
    { href: '/black-ops/four/info', text: 'Info Hub' },
    { text: 'Zombies Perks' },
  ];

  return (
    <PageLayout containerClassName='theme-black-ops'>
      <Container>
        <div className='text-center mb-4'>
          <h2 className={styles.pageTitle}>Black Ops 4</h2>
          <p className={styles.pageSubtitle}>Zombies Perks</p>
        </div>

        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
            <PerkList game='black-ops-four-zombies' />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
