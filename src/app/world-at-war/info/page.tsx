// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import InfoHubClient from '@/components/info/info-hub-client/InfoHubClient';
// --- Font Awesome ---
import { faGun, faMedal, faExplosion } from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'World at War Info Hub | Weapons, Perks & Equipment',
  description:
    'Your central hub for Call of Duty: World at War intel. Explore detailed information on all multiplayer weapons, perks, and equipment from the classic WW2 shooter.',
  keywords: [
    'World at War info',
    'WaW info',
    'WaW weapons',
    'WaW perks',
    'World at War equipment',
    'COD WaW',
  ],
};

const multiplayerLinks = [
  {
    icon: faGun,
    title: 'Weapons',
    description:
      'Explore the full arsenal of authentic WW2 firearms used in the Pacific and European theaters.',
    link: '/world-at-war/info/weapons',
  },
  {
    icon: faMedal,
    title: 'Perks',
    description:
      'Learn about the three tiers of perks and the unique vehicle perks available to customize your class.',
    link: '/world-at-war/info/perks',
  },
  {
    icon: faExplosion,
    title: 'Equipment',
    description:
      'Familiarize yourself with the lethal and tactical equipment that defined boots-on-the-ground combat.',
    link: '/world-at-war/info/equipment',
  },
];

const breadcrumbLinks = [{ href: '/world-at-war', text: 'World at War' }, { text: 'Info Hub' }];

export default function WorldAtWarInfoPage() {
  return (
    <PageLayout containerClassName='theme-waw'>
      <InfoHubClient
        heroTitle='World at War'
        heroSubTitle='Your Central Hub for Multiplayer Intel'
        multiplayerLink='/world-at-war/generator'
        multiplayerLinks={multiplayerLinks}
        buttonVariant='secondary'
        breadcrumbs={breadcrumbLinks}
      />
    </PageLayout>
  );
}
