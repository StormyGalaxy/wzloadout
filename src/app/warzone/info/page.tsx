// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import InfoHubClient from '@/components/info/info-hub-client/InfoHubClient';
// --- Font Awesome ---
import { faGun, faMedal, faExplosion, faStar } from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Call of Duty: Warzone - Info Hub',
  description:
    'Your central hub for Call of Duty: Warzone intel. Explore detailed information on all weapons, perks, wildcards, and equipment to dominate the battle royale.',
  keywords: [
    'COD Warzone Info',
    'Warzone weapons',
    'Warzone perks',
    'Warzone wildcards',
    'Warzone equipment',
    'Warzone meta',
    'Call of Duty Warzone',
  ],
};

const multiplayerLinks = [
  {
    icon: faGun,
    title: 'Weapons',
    description: 'Explore the full arsenal of firearms integrated into Warzone.',
    link: '/warzone/info/weapons',
  },
  {
    icon: faMedal,
    title: 'Perks',
    description: 'Review the essential perks needed to gain an advantage and survive.',
    link: '/warzone/info/perks',
  },
  {
    icon: faExplosion,
    title: 'Equipment',
    description: 'Familiarize yourself with the lethal and tactical equipment in your arsenal.',
    link: '/warzone/info/equipment',
  },
  {
    icon: faStar,
    title: 'Wildcards',
    description: 'Learn about the game-changing Wildcards available to customize your loadout.',
    link: '/warzone/info/wildcards',
  },
];

const breadcrumbLinks = [{ href: '/warzone', text: 'Warzone' }, { text: 'Info Hub' }];

export default function WarzoneInfoPage() {
  return (
    <PageLayout containerClassName='theme-warzone'>
      <InfoHubClient
        heroTitle='Call of Duty: Warzone'
        heroSubTitle='Your Central Hub for Battle Royale Intel'
        multiplayerLink='/warzone/generator'
        multiplayerLinks={multiplayerLinks}
        buttonVariant='success'
        breadcrumbs={breadcrumbLinks}
      />
    </PageLayout>
  );
}
