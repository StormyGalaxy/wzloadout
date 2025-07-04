// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import InfoHubClient from '@/components/info/info-hub-client/InfoHubClient';
// --- Font Awesome ---
import {
  faGun,
  faMedal,
  faPlane,
  faExplosion,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Infinite Warfare Info Hub | Weapons, Rigs, Perks & More',
  description:
    'Your central hub for Call of Duty: Infinite Warfare intel. Explore detailed information on all multiplayer weapons, Combat Rigs, perks, and scorestreaks.',
  keywords: [
    'Infinite Warfare info',
    'IW info',
    'IW weapons',
    'Infinite Warfare Combat Rigs',
    'IW perks',
    'IW scorestreaks',
    'Call of Duty IW',
  ],
};

const multiplayerLinks = [
  {
    icon: faGun,
    title: 'Weapons',
    description: 'Explore the full arsenal of advanced energy and ballistic firearms.',
    link: '/infinite-warfare/info/weapons',
  },
  {
    icon: faUserShield,
    title: 'Combat Rigs',
    description: 'Review all six Combat Rigs and their unique Payloads and Traits.',
    link: '/infinite-warfare/info/combat-rigs',
  },
  {
    icon: faMedal,
    title: 'Perks',
    description: 'Learn about the three tiers of perks available to customize your playstyle.',
    link: '/infinite-warfare/info/perks',
  },
  {
    icon: faPlane,
    title: 'Scorestreaks',
    description: 'Familiarize yourself with the lethal and tactical Scorestreaks you can earn.',
    link: '/infinite-warfare/info/streaks',
  },
  {
    icon: faExplosion,
    title: 'Equipment',
    description: 'View the standard and unique futuristic equipment options for your loadout.',
    link: '/infinite-warfare/info/equipment',
  },
];

const breadcrumbLinks = [
  { href: '/infinite-warfare', text: 'Infinite Warfare' },
  { text: 'Info Hub' },
];

export default function InfiniteWarfareInfoPage() {
  return (
    <PageLayout containerClassName='theme-infinite-warfare'>
      <InfoHubClient
        heroTitle='Infinite Warfare'
        heroSubTitle='Your Central Hub for Multiplayer Intel'
        multiplayerLink='/infinite-warfare/generator'
        multiplayerLinks={multiplayerLinks}
        buttonVariant='infinite-warfare'
        breadcrumbs={breadcrumbLinks}
        textOutline={true}
      />
    </PageLayout>
  );
}
