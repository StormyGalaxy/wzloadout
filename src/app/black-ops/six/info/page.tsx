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
  faStar,
  faMapLocationDot,
  faFlaskVial,
  faFire,
  faBolt,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 6 Info Hub | Weapons, Perks, Streaks & Zombies',
  description:
    'Your central hub for Call of Duty: Black Ops 6 intel. Explore detailed information on all multiplayer weapons, perks, scorestreaks, equipment, and a complete guide to the round-based Zombies mode.',
  keywords: [
    'Black Ops 6 info',
    'BO6 info',
    'BO6 weapons',
    'BO6 perks',
    'BO6 scorestreaks',
    'BO6 wildcards',
    'BO6 zombies',
    'Black Ops 6 Gobblegums',
    'Black Ops 6 Ammo Mods',
    'Black Ops 6 Augments',
  ],
};

const multiplayerLinks = [
  {
    icon: faGun,
    title: 'Weapons',
    description: 'Explore the full arsenal of BO6 firearms, including detailed stats.',
    link: '/black-ops/six/info/weapons',
  },
  {
    icon: faMedal,
    title: 'Perks',
    description: 'Learn about the three tiers of perks available to customize your playstyle.',
    link: '/black-ops/six/info/perks',
  },
  {
    icon: faStar,
    title: 'Wildcards',
    description: 'See how the classic system is enhanced with game-changing Wildcards.',
    link: '/black-ops/six/info/wildcards',
  },
  {
    icon: faPlane,
    title: 'Scorestreaks',
    description: 'Familiarize yourself with the lethal and tactical Scorestreaks you can earn.',
    link: '/black-ops/six/info/streaks',
  },
  {
    icon: faExplosion,
    title: 'Equipment',
    description: 'View the standard and unique equipment options for your loadout.',
    link: '/black-ops/six/info/equipment',
  },
];

const zombiesLinks = [
  {
    icon: faMapLocationDot,
    title: 'Zombies Maps',
    description: 'Uncover the secrets of the new round-based Zombies maps.',
    link: '/black-ops/six/info/zombies/maps',
  },
  {
    icon: faFlaskVial,
    title: 'GobbleGums',
    description: 'Chew on this! Get details on the returning classic and whimsical GobbleGums.',
    link: '/black-ops/six/info/zombies/gobblegums',
  },
  {
    icon: faFire,
    title: 'Ammo Mods',
    description: 'Learn about the special ammunition types to enhance your zombie-slaying power.',
    link: '/black-ops/six/info/zombies/ammo-mods',
  },
  {
    icon: faBolt,
    title: 'Field Upgrades',
    description: 'Discover the powerful, rechargeable Field Upgrades to turn the tide of battle.',
    link: '/black-ops/six/info/zombies/field-upgrades',
  },
  {
    icon: faPlusSquare,
    title: 'Augments',
    description: 'Find out how to modify your Perks, Field Upgrades, and Ammo Mods.',
    link: '/black-ops/six/info/zombies/augments',
  },
];

const breadcrumbLinks = [{ href: '/black-ops/six', text: 'Black Ops 6' }, { text: 'Info Hub' }];

export default function BlackOpsSixInfoPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <InfoHubClient
        heroTitle='Black Ops 6'
        heroSubTitle='Your Central Hub for Multiplayer & Zombies Intel'
        multiplayerLink='/black-ops/six/generator'
        multiplayerLinks={multiplayerLinks}
        zombiesLink='/black-ops/six/zombies-generator'
        zombiesLinks={zombiesLinks}
        buttonVariant='black-ops'
        breadcrumbs={breadcrumbLinks}
      />
    </PageLayout>
  );
}
