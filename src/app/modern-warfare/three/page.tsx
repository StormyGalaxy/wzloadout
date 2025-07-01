// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import LandingPageComponent from '@/components/common/LandingPageComponent';
// --- Font Awesome ---
import { faGun, faSkull, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Modern Warfare 3 (2023) Loadout & Class Generators',
  description:
    'The central hub for all things Call of Duty: Modern Warfare 3 (2023). Access our multiplayer and zombies random class generators and explore our comprehensive info hub.',
  keywords: [
    'Modern Warfare 3',
    'COD Modern Warfare 3',
    'MW3 random class generator',
    'MWZ loadouts',
    'Modern Warfare 3 info hub',
    'MW3 Zombies',
  ],
};

const toolCards = [
  {
    title: 'Multiplayer Generator',
    description: 'Generate random classes for a unique challenge in every match.',
    href: '/modern-warfare/three/generator',
    icon: faGun,
  },
  {
    title: 'Zombies Generator',
    description: 'Create random loadouts to survive the undead hordes in MWZ.',
    href: '/modern-warfare/three/zombies-generator',
    icon: faSkull,
  },
  {
    title: 'Info Hub',
    description: 'Explore detailed information about weapons, perks, and equipment.',
    href: '/modern-warfare/three/info',
    icon: faCircleInfo,
  },
];

export default function ModernWarfareThreeLandingPage() {
  return (
    <PageLayout containerClassName='theme-mw3'>
      <LandingPageComponent
        title='Modern Warfare 3'
        subtitle='Your central hub for our Modern Warfare 3 (2023) tools and resources.'
        toolCards={toolCards}
        buttonVariant='danger'
      />
    </PageLayout>
  );
}
