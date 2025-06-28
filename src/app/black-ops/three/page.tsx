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
  title: 'Black Ops 3 Multiplayer & Zombies Generators',
  description:
    'Your hub for Call of Duty: Black Ops 3 tools. Generate random classes for multiplayer and explore a complete info hub with details on weapons, perks, and more.',
  keywords: [
    'Black Ops 3',
    'BO3',
    'Black Ops 3 random class generator',
    'BO3 loadouts',
    'Black Ops 3 zombies generator',
    'round-based zombies',
    'BO3 info hub',
    'COD BO3 generator',
    'black ops three rcg',
    'class generator',
    'zombies',
  ],
};

const toolCards = [
  {
    title: 'Multiplayer Generator',
    description:
      'Master the new Omnimovement system. Generate random classes with unique weapons, perks, and equipment to dominate the opposition in classic 6v6 combat.',
    href: '/black-ops/three/generator',
    icon: faGun,
  },
  {
    title: 'Info Hub',
    description:
      'Get the tactical overview of the Black Ops 3 arsenal. Browse detailed information on weapons, equipment, perks, streaks, and Zombies content.',
    href: '/black-ops/three/info',
    icon: faCircleInfo,
  },
];

export default function BlackOpsThreeLandingPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <LandingPageComponent
        title='Black Ops 3'
        subtitle='Forced to go rogue. Hunted from within. Master the new Omnimovement system and survive the return of round-based Zombies with these tools.'
        toolCards={toolCards}
        buttonVariant='black-ops'
      />
    </PageLayout>
  );
}
