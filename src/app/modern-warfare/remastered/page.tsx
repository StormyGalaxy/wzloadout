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
  description: '',
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
    description:
      'Break the meta and discover new loadouts. Generate random classes with unique weapons, perks, and wildcards to keep your gameplay fresh.',
    href: '/black-ops/cold-war/generator',
    icon: faGun,
  },
  {
    title: 'Info Hub',
    description:
      'Get the intel on the entire Black Ops Cold War arsenal. Browse detailed information on weapons, perks, equipment, scorestreaks, and zombies content.',
    href: '/black-ops/cold-war/info',
    icon: faCircleInfo,
  },
];

export default function ModernWarfareRemasteredLandingPage() {
  return (
    <PageLayout containerClassName='theme-cold-war'>
      <LandingPageComponent
        title='Black Ops Cold War'
        subtitle='Dive back into the 1980s. Here are all the tools you need for Black Ops Cold War multiplayer and zombies, from random class generators to a full info hub.'
        toolCards={toolCards}
        buttonVariant='danger'
      />
    </PageLayout>
  );
}
