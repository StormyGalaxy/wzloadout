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
} from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 3 Info Hub | Weapons, Specialists, Perks & More',
  description:
    'Your central hub for Call of Duty: Black Ops 3 intel. Explore detailed information on all multiplayer weapons, specialists, perks, equipment, and the Pick 10 system.',
  keywords: [
    'Black Ops 3 info',
    'BO3 info',
    'BO3 weapons',
    'BO3 specialists',
    'BO3 perks',
    'BO3 scorestreaks',
    'BO3 wildcards',
    'Black Ops 3 Pick 10',
  ],
};

const multiplayerLinks = [
  {
    icon: faGun,
    title: 'Weapons',
    description: 'Explore the full futuristic arsenal of Black Ops 3 firearms.',
    link: '/black-ops/three/info/weapons',
  },
  {
    icon: faUserShield,
    title: 'Specialists',
    description:
      'Review all the Specialists and their unique, powerful weapon and ability options.',
    link: '/black-ops/three/info/specialists',
  },
  {
    icon: faMedal,
    title: 'Perks',
    description:
      'Learn about the three tiers of perks available to customize your playstyle in the Pick 10 system.',
    link: '/black-ops/three/info/perks',
  },
  {
    icon: faStar,
    title: 'Wildcards',
    description:
      'See how Wildcards can bend the rules of the Pick 10 system to create unique loadouts.',
    link: '/black-ops/three/info/wildcards',
  },
  {
    icon: faPlane,
    title: 'Scorestreaks',
    description:
      'Familiarize yourself with the devastating and tactical Scorestreaks you can earn.',
    link: '/black-ops/three/info/streaks',
  },
  {
    icon: faExplosion,
    title: 'Equipment',
    description: 'View the standard lethal and tactical equipment options for your class.',
    link: '/black-ops/three/info/equipment',
  },
];

const breadcrumbLinks = [{ href: '/black-ops/three', text: 'Black Ops 3' }, { text: 'Info Hub' }];

export default function BlackOpsThreeInfoPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <InfoHubClient
        heroTitle='Black Ops 3'
        heroSubTitle='Your Central Hub for Multiplayer Intel'
        multiplayerLink='/black-ops/three/generator'
        multiplayerLinks={multiplayerLinks}
        buttonVariant='black-ops'
        breadcrumbs={breadcrumbLinks}
      />
    </PageLayout>
  );
}
