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
  title: 'Modern Warfare 2 (2022) Loadout & Class Generators',
  description:
    'The official hub for Call of Duty: Modern Warfare 2 (2022). Get access to our multiplayer random class generator and explore a comprehensive info hub for all weapons, perks, and equipment.',
  keywords: [
    'Modern Warfare 2',
    'COD Modern Warfare 2',
    'MW2 random class generator',
    'Modern Warfare 2 loadouts',
    'MW2 info hub',
    'COD MW2',
  ],
};

const toolCards = [
  {
    title: 'Multiplayer Generator',
    description: 'Create random classes to challenge yourself in every match.',
    href: '/modern-warfare/two/generator',
    icon: faGun,
  },
  {
    title: 'Info Hub',
    description: 'Explore in-depth information on all weapons, perks, and equipment.',
    href: '/modern-warfare/two/info',
    icon: faCircleInfo,
  },
];

export default function ModernWarfareTwoLandingPage() {
  return (
    <PageLayout containerClassName='theme-mw2'>
      <LandingPageComponent
        title='Modern Warfare 2'
        subtitle='Your central hub for Modern Warfare 2 (2022) tools and resources.'
        toolCards={toolCards}
        buttonVariant='mw2'
      />
    </PageLayout>
  );
}
