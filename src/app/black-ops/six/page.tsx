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
  title: 'Black Ops 6 Multiplayer & Zombies Generators',
  description:
    'Your hub for Call of Duty: Black Ops 6 tools. Generate random classes for multiplayer, create loadouts for round-based Zombies, and explore a complete info hub with details on weapons, perks, and more.',
  keywords: [
    'Black Ops 6',
    'BO6',
    'Black Ops 6 random class generator',
    'BO6 loadouts',
    'Black Ops 6 zombies generator',
    'Omnimovement',
    'round-based zombies',
    'BO6 info hub',
    'COD BO6 generator',
    'black ops six rcg',
    'class generator',
    'zombies',
  ],
};

const toolCards = [
  {
    title: 'Multiplayer Generator',
    description:
      'Master the new Omnimovement system. Generate random classes with unique weapons, perks, and equipment to dominate the opposition in classic 6v6 combat.',
    href: '/black-ops/six/generator',
    icon: faGun,
  },
  {
    title: 'Zombies Generator',
    description:
      'Survive the undead hordes in new round-based maps. Generate a random loadout with GobbleGums and craftable Wonder Weapons for your next match.',
    href: '/black-ops/six/zombies-generator',
    icon: faSkull,
  },
  {
    title: 'Info Hub',
    description:
      'Get the tactical overview of the Black Ops 6 arsenal. Browse detailed information on weapons, equipment, perks, streaks, and Zombies content.',
    href: '/black-ops/six/info',
    icon: faCircleInfo,
  },
];

export default function BlackOpsSixLandingPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <LandingPageComponent
        title='Black Ops 6'
        subtitle='Forced to go rogue. Hunted from within. Master the new Omnimovement system and survive the return of round-based Zombies with these tools.'
        toolCards={toolCards}
        buttonVariant='black-ops'
      />
    </PageLayout>
  );
}
