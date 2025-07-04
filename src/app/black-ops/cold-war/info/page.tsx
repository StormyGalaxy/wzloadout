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
  faBolt,
} from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops Cold War - Info Hub',
  description:
    'Your central hub for Call of Duty: Black Ops Cold War (2020) intel. Explore detailed information on all multiplayer weapons, perks, scorestreaks, equipment, and a complete guide to Zombies maps and field upgrades.',
  keywords: [
    'COD Black Ops Cold War RCG',
    'cold war random class generator',
    'cold war info',
    'cold war weapons',
    'cold war perks',
    'cold war zombies maps',
  ],
};

const multiplayerLinks = [
  {
    icon: faGun,
    title: 'Weapons',
    description: 'Explore the full arsenal of Cold War firearms, from assault rifles to SMGs.',
    link: '/black-ops/cold-war/info/weapons',
  },
  {
    icon: faMedal,
    title: 'Perks',
    description: 'Review the three tiers of perks to gain an edge in multiplayer combat.',
    link: '/black-ops/cold-war/info/perks',
  },
  {
    icon: faStar,
    title: 'Wildcards',
    description: 'Learn about the four Wildcards that break the rules of class creation.',
    link: '/black-ops/cold-war/info/wildcards',
  },
  {
    icon: faPlane,
    title: 'Scorestreaks',
    description: 'Familiarize yourself with the lethal and tactical Scorestreaks available.',
    link: '/black-ops/cold-war/info/streaks',
  },
  {
    icon: faExplosion,
    title: 'Equipment',
    description: 'View the lethal, tactical, and support equipment available for your loadout.',
    link: '/black-ops/cold-war/info/equipment',
  },
];

const zombiesLinks = [
  {
    icon: faMapLocationDot,
    title: 'Zombies Maps',
    description: 'Uncover the secrets and layouts of the Dark Aether storyline maps.',
    link: '/black-ops/cold-war/info/zombies/maps',
  },
  {
    icon: faBolt,
    title: 'Field Upgrades',
    description: 'Get details on the powerful Field Upgrades to survive against the undead.',
    link: '/black-ops/cold-war/info/zombies/field-upgrades',
  },
];

const breadcrumbLinks = [
  { href: '/black-ops/cold-war', text: 'Black Ops Cold War' },
  { text: 'Info Hub' },
];

export default function ColdWarInfoPage() {
  return (
    <PageLayout containerClassName='theme-cold-war'>
      <InfoHubClient
        heroTitle='Black Ops Cold War'
        heroSubTitle='Your Central Hub for Multiplayer & Zombies Intel'
        multiplayerLink='/black-ops/cold-war/generator'
        multiplayerLinks={multiplayerLinks}
        zombiesLink='/black-ops/cold-war/zombies-generator'
        zombiesLinks={zombiesLinks}
        buttonVariant='danger'
        breadcrumbs={breadcrumbLinks}
      />
    </PageLayout>
  );
}
