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
  title: 'Modern Warfare Remastered Info Hub | Weapons, Perks & Equipment',
  description:
    'The complete info hub for Call of Duty: Modern Warfare Remastered. Find detailed information on all multiplayer weapons, perks, and equipment.',
  keywords: [
    'Modern Warfare Remastered info',
    'MWR info',
    'MWR weapons',
    'Modern Warfare Remastered perks',
    'MWR equipment',
    'Call of Duty MWR',
  ],
};

const multiplayerLinks = [
  {
    icon: faGun,
    title: 'Weapons',
    description: 'Explore the full arsenal of classic and modern firearms.',
    link: '/modern-warfare/remastered/info/weapons',
  },
  {
    icon: faMedal,
    title: 'Perks',
    description: 'Learn about the three tiers of perks to customize your playstyle.',
    link: '/modern-warfare/remastered/info/perks',
  },
  {
    icon: faExplosion,
    title: 'Equipment',
    description: 'View the tactical and lethal equipment options for your loadout.',
    link: '/modern-warfare/remastered/info/equipment',
  },
];

const breadcrumbLinks = [
  { href: '/modern-warfare/remastered', text: 'Modern Warfare Remastered' },
  { text: 'Info Hub' },
];

export default function ModernWarfareRemasteredInfoPage() {
  return (
    <PageLayout containerClassName='theme-mwr'>
      <InfoHubClient
        heroTitle='Modern Warfare Remastered'
        heroSubTitle='Your Central Hub for Multiplayer Intel'
        multiplayerLink='/modern-warfare/remastered/generator'
        multiplayerLinks={multiplayerLinks}
        buttonVariant='success'
        breadcrumbs={breadcrumbLinks}
      />
    </PageLayout>
  );
}
