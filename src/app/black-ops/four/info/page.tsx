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
  faUserShield,
  faMapLocationDot,
  faFlaskVial,
  faGem,
  faBottleDroplet,
} from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 4 Info Hub | Weapons, Specialists, Perks & Zombies',
  description:
    'Your central hub for Call of Duty: Black Ops 4 intel. Explore detailed information on all multiplayer weapons, specialists, perks, equipment, and a complete guide to the Chaos & Aether Zombies stories.',
  keywords: [
    'Black Ops 4 info',
    'BO4 info',
    'BO4 weapons',
    'BO4 specialists',
    'BO4 perks',
    'BO4 scorestreaks',
    'Chaos story',
    'Aether story',
    'Black Ops 4 zombies perks',
    'BO4 elixirs',
    'BO4 talismans',
  ],
};

const multiplayerLinks = [
  {
    icon: faGun,
    title: 'Weapons',
    description: 'Explore the full arsenal of BO4 firearms, complete with Operator Mods.',
    link: '/black-ops/four/info/weapons',
  },
  {
    icon: faUserShield,
    title: 'Specialists',
    description:
      'Review all the Specialists, their unique equipment, and powerful weapon abilities.',
    link: '/black-ops/four/info/specialists',
  },
  {
    icon: faMedal,
    title: 'Perks',
    description: 'Learn about the three tiers of perks available to customize your playstyle.',
    link: '/black-ops/four/info/perks',
  },
  {
    icon: faStar,
    title: 'Wildcards',
    description: 'See how the Pick 10 system is enhanced with game-changing Wildcards.',
    link: '/black-ops/four/info/wildcards',
  },
  {
    icon: faPlane,
    title: 'Scorestreaks',
    description: 'Familiarize yourself with the lethal and tactical Scorestreaks you can earn.',
    link: '/black-ops/four/info/streaks',
  },
  {
    icon: faExplosion,
    title: 'Equipment',
    description: 'View the standard equipment and unique gear options for your loadout.',
    link: '/black-ops/four/info/equipment',
  },
];

const zombiesLinks = [
  {
    icon: faMapLocationDot,
    title: 'Zombies Maps',
    description: 'Uncover the secrets of the Chaos and Aether story maps.',
    link: '/black-ops/four/info/zombies/maps',
  },
  {
    icon: faBottleDroplet,
    title: 'Zombies Perks',
    description: 'Get details on the unique perk system and statues for both Zombies storylines.',
    link: '/black-ops/four/info/zombies/perks',
  },
  {
    icon: faFlaskVial,
    title: 'Elixirs',
    description: 'Learn about the various consumable Elixirs that provide temporary advantages.',
    link: '/black-ops/four/info/zombies/elixers',
  },
  {
    icon: faGem,
    title: 'Talismans',
    description: 'Discover the rare Talismans that grant permanent buffs for your matches.',
    link: '/black-ops/four/info/zombies/talismans',
  },
];

const breadcrumbLinks = [{ href: '/black-ops/four', text: 'Black Ops 4' }, { text: 'Info Hub' }];

export default function BlackOpsFourInfoPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <InfoHubClient
        heroTitle='Black Ops 4'
        heroSubTitle='Your Central Hub for Multiplayer & Zombies Intel'
        multiplayerLink='/black-ops/four/generator'
        multiplayerLinks={multiplayerLinks}
        zombiesLink='/black-ops/four/zombies/generator'
        zombiesLinks={zombiesLinks}
        buttonVariant='black-ops'
        breadcrumbs={breadcrumbLinks}
      />
    </PageLayout>
  );
}
