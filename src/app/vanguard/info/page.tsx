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
  faMapLocationDot,
  faWandSparkles,
} from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Call of Duty: Vanguard - Info Hub',
  description:
    'Your central hub for Call of Duty: Vanguard intel. Explore detailed information on all multiplayer weapons, perks, streaks, equipment, and a complete guide to Zombies maps, artifacts, and covenants.',
  keywords: [
    'COD Vanguard RCG',
    'vanguard random class generator',
    'vanguard info',
    'vanguard weapons',
    'vanguard perks',
    'vanguard streaks',
    'vanguard zombies maps',
    'vanguard covenants',
    'vanguard artifacts',
  ],
};

const multiplayerLinks = [
  {
    icon: faGun,
    title: 'Weapons',
    description: 'Explore the full arsenal of WW2 firearms, from rifles to sidearms.',
    link: '/vanguard/info/weapons',
  },
  {
    icon: faMedal,
    title: 'Perks',
    description: 'Review the full list of perks to customize your loadout.',
    link: '/vanguard/info/perks',
  },
  {
    icon: faPlane,
    title: 'Killstreaks',
    description: 'Learn about the game-changing Killstreaks you can call in to support your team.',
    link: '/vanguard/info/streaks',
  },
  {
    icon: faExplosion,
    title: 'Equipment',
    description:
      'Familiarize yourself with the lethal and tactical equipment available for your loadout.',
    link: '/vanguard/info/equipment',
  },
];

const zombiesLinks = [
  {
    icon: faMapLocationDot,
    title: 'Zombies Maps',
    description: 'Uncover the secrets and layouts of the dark and chilling Zombies maps.',
    link: '/vanguard/info/zombies/maps',
  },
  {
    icon: faWandSparkles,
    title: 'Zombies Artifacts',
    description:
      'Discover the powerful Artifacts you can wield to turn the tide against the undead.',
    link: '/vanguard/info/zombies/artifacts',
  },
];

const breadcrumbLinks = [{ href: '/vanguard', text: 'Vanguard' }, { text: 'Info Hub' }];

export default function VanguardInfoPage() {
  return (
    <PageLayout containerClassName='theme-vanguard'>
      <InfoHubClient
        heroTitle='Call of Duty: Vanguard'
        heroSubTitle='Your Central Hub for Multiplayer & Zombies Intel'
        multiplayerLink='/vanguard/generator'
        multiplayerLinks={multiplayerLinks}
        zombiesLink='/vanguard/zombies-generator'
        zombiesLinks={zombiesLinks}
        buttonVariant='danger'
        breadcrumbs={breadcrumbLinks}
      />
    </PageLayout>
  );
}
