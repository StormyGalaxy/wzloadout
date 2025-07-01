// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import InfoHubClient from '@/components/info/info-hub-client/InfoHubClient';
// --- Font Awesome ---
import { faGun, faMedal, faExplosion, faPlane } from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare 2 (2022) Info Hub | Weapons, Perks & More',
  description:
    'Your central hub for Call of Duty: Modern Warfare 2 (2022) intel. Explore detailed information on all multiplayer weapons, perks, streaks, and equipment.',
  keywords: [
    'Modern Warfare 2 info',
    'MW2 info',
    'MW2 weapons',
    'Modern Warfare 2 perks',
    'MW2 streaks',
    'MW2 equipment',
    'Call of Duty MW2',
  ],
};

const multiplayerLinks = [
  {
    icon: faGun,
    title: 'Weapons',
    description: 'Explore the full arsenal of modern firearms and weapon platforms.',
    link: '/modern-warfare/two/info/weapons',
  },
  {
    icon: faMedal,
    title: 'Perks',
    description: 'Learn about the Perk Packages available to customize your playstyle.',
    link: '/modern-warfare/two/info/perks',
  },
  {
    icon: faExplosion,
    title: 'Equipment',
    description: 'View the tactical and lethal equipment options for your loadout.',
    link: '/modern-warfare/two/info/equipment',
  },
  {
    icon: faPlane,
    title: 'Scorestreaks',
    description: 'Familiarize yourself with the lethal and tactical Killstreaks you can earn.',
    link: '/modern-warfare/two/info/streaks',
  },
];

const breadcrumbLinks = [
  { href: '/modern-warfare/two', text: 'Modern Warfare 2' },
  { text: 'Info Hub' },
];

export default function ModernWarfareTwoInfoPage() {
  return (
    <PageLayout containerClassName='theme-mw2'>
      <InfoHubClient
        heroTitle='Modern Warfare 2'
        heroSubTitle='Your Central Hub for Multiplayer Intel'
        multiplayerLink='/modern-warfare/two/generator'
        multiplayerLinks={multiplayerLinks}
        buttonVariant='mw2'
        breadcrumbs={breadcrumbLinks}
      />
    </PageLayout>
  );
}
