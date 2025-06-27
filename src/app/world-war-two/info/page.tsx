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
  faGlassWater,
  faWandSparkles,
} from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Call of Duty: WWII - Info Hub',
  description:
    'Your central hub for Call of Duty: WWII (2017) intel. Explore detailed information on all multiplayer weapons, perks, scorestreaks, equipment, and a complete guide to Nazi Zombies maps, perks, and special abilities.',
  keywords: [
    'COD World War Two RCG',
    'world war two random class generator',
    'world war two info',
    'wwii weapons',
    'wwii perks',
    'wwii scorestreaks',
    'nazi zombies maps',
  ],
};

const multiplayerLinks = [
  {
    icon: faGun,
    title: 'Weapons',
    description: 'Explore the full arsenal of authentic WWII firearms, from rifles to sidearms.',
    link: '/world-war-two/info/weapons',
  },
  {
    icon: faMedal,
    title: 'Divisions & Perks',
    description:
      'Review the full list of Divisions and Basic Training skills to dominate the battlefield.',
    link: '/world-war-two/info/perks',
  },
  {
    icon: faPlane,
    title: 'Scorestreaks',
    description: 'Learn about the game-changing Scorestreaks you can call in to support your team.',
    link: '/world-war-two/info/streaks',
  },
  {
    icon: faExplosion,
    title: 'Equipment',
    description:
      'Familiarize yourself with the lethal and tactical equipment available for your loadout.',
    link: '/world-war-two/info/equipment',
  },
];

const zombiesLinks = [
  {
    icon: faMapLocationDot,
    title: 'Zombies Maps',
    description: 'Uncover the secrets and layouts of the chilling Nazi Zombies maps.',
    link: '/world-war-two/info/zombies/maps',
  },
  {
    icon: faGlassWater,
    title: 'Zombies Perks',
    description: 'Get details on the crucial Perks needed to survive against the undead hordes.',
    link: '/world-war-two/info/zombies/perks',
  },
  {
    icon: faWandSparkles,
    title: 'Zombies Specials',
    description: 'Discover the powerful Special Abilities you can unleash to turn the tide.',
    link: '/world-war-two/info/zombies/specials',
  },
];

export default function WorldWarTwoInfoPage() {
  return (
    <PageLayout containerClassName='theme-ww2'>
      <InfoHubClient
        heroTitle='Call of Duty: WWII'
        heroSubTitle='Your Central Hub for Multiplayer & Zombies Intel'
        multiplayerLink='/world-war-two/generator'
        multiplayerLinks={multiplayerLinks}
        zombiesLink='/world-war-two/zombies-generator'
        zombiesLinks={zombiesLinks}
        buttonVariant='ww2'
      />
    </PageLayout>
  );
}
