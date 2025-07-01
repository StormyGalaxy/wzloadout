// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import InfoHubClient from '@/components/info/info-hub-client/InfoHubClient';
// --- Font Awesome ---
import { faGun, faMedal, faExplosion, faPlane, faSkull } from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare 3 (2023) Info Hub | Weapons, Perks & More',
  description:
    'Your complete hub for Call of Duty: Modern Warfare 3 (2023) intel. Explore detailed information on all multiplayer and zombies weapons, perks (gear), streaks, and equipment.',
  keywords: [
    'Modern Warfare 3 info',
    'MW3 info',
    'MW3 weapons',
    'Modern Warfare 3 perks',
    'MW3 gear',
    'MW3 streaks',
    'MW3 equipment',
    'Call of Duty MW3',
    'MWZ info',
  ],
};

const multiplayerLinks = [
  {
    icon: faGun,
    title: 'Weapons',
    description: 'Explore the full arsenal of firearms and weapon platforms.',
    link: '/modern-warfare/three/info/weapons',
  },
  {
    icon: faMedal,
    title: 'Perks (Gear)',
    description: 'Learn about the Vests, Gloves, Boots, and Gear that grant perk abilities.',
    link: '/modern-warfare/three/info/perks',
  },
  {
    icon: faExplosion,
    title: 'Equipment',
    description: 'View the tactical and lethal equipment options for your loadout.',
    link: '/modern-warfare/three/info/equipment',
  },
  {
    icon: faPlane,
    title: 'Scorestreaks',
    description: 'Familiarize yourself with the lethal and tactical Killstreaks you can earn.',
    link: '/modern-warfare/three/info/streaks',
  },
];

const zombiesLinks = [
  {
    icon: faSkull,
    title: 'Equipment',
    description: 'Discover the unique equipment available in Modern Warfare Zombies.',
    link: '/modern-warfare/three/info/zombies/equipment',
  },
];

const breadcrumbLinks = [
  { href: '/modern-warfare/three', text: 'Modern Warfare 3' },
  { text: 'Info Hub' },
];

export default function ModernWarfareThreeInfoPage() {
  return (
    <PageLayout containerClassName='theme-mw3'>
      <InfoHubClient
        heroTitle='Modern Warfare 3'
        heroSubTitle='Your Central Hub for Multiplayer & Zombies Intel'
        multiplayerLink='/modern-warfare/three/generator'
        zombiesLink='/modern-warfare/three/zombies'
        multiplayerLinks={multiplayerLinks}
        zombiesLinks={zombiesLinks}
        buttonVariant='danger'
        breadcrumbs={breadcrumbLinks}
      />
    </PageLayout>
  );
}
