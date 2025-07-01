// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import LandingPageComponent from '@/components/common/LandingPageComponent';
// --- Font Awesome ---
import { faGun, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare Remastered Loadout & Class Generators',
  description:
    'The central hub for all things Call of Duty: Modern Warfare Remastered. Access our multiplayer random class generator and explore our comprehensive information hub for weapons, perks, and more.',
  keywords: [
    'Modern Warfare Remastered',
    'COD Modern Warfare Remastered',
    'Modern Warfare Remastered random class generator',
    'MWR loadouts',
    'Modern Warfare Remastered info hub',
    'class generator',
  ],
};

const toolCards = [
  {
    title: 'Multiplayer Generator',
    description: 'Generate random classes for a unique challenge in every match.',
    href: '/modern-warfare/remastered/generator',
    icon: faGun,
  },
  {
    title: 'Info Hub',
    description: 'Explore detailed information about weapons, perks, and equipment.',
    href: '/modern-warfare/remastered/info',
    icon: faCircleInfo,
  },
];

export default function ModernWarfareRemasteredLandingPage() {
  return (
    <PageLayout containerClassName='theme-mwr'>
      <LandingPageComponent
        title='Modern Warfare Remastered'
        subtitle='Your central hub for our Modern Warfare Remastered tools and resources.'
        toolCards={toolCards}
        buttonVariant='success'
      />
    </PageLayout>
  );
}
