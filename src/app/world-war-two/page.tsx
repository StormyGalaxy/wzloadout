// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import LandingPageComponent from '@/components/common/LandingPageComponent';
// --- Font Awesome ---
import { faGun, faSkull, faSliders, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Call of Duty: WWII Loadout, Class & Match Generators',
  description:
    'Dominate the battlefields of WWII with our Call of Duty: World War Two tools. Generate random multiplayer and zombies classes, create custom matches, and explore detailed loadout information. Your ultimate companion for COD: WWII!',
  keywords: [
    'Call of Duty WWII',
    'COD WWII',
    'WWII random class generator',
    'COD WWII loadouts',
    'WWII zombies generator',
    'WWII custom match',
    'Call of Duty World War Two',
    'COD World War Two generator',
    'COD World War Two RCG',
    'world war two random class generator',
    'world war two',
    'world war two rcg',
    'class generator',
    'zombies',
    'world war two zombies',
  ],
};

const toolCards = [
  {
    title: 'Multiplayer Generator',
    description:
      'Stuck in a rut using the same old classes? Spice up your multiplayer experience with a randomly generated loadout. Discover new weapon combinations and strategies you never thought to try.',
    href: '/world-war-two/generator',
    icon: faGun,
  },
  {
    title: 'Zombies Generator',
    description:
      "Challenge yourself and your friends in your next Zombies match. Generate a random loadout and see how long you can survive against the undead hordes with the weapons and perks you're given.",
    href: '/world-war-two/zombies-generator',
    icon: faSkull,
  },
  {
    title: 'Custom Match',
    description:
      'Set up the perfect private match with our custom match generator. Easily randomize teams, game modes, and settings for a unique and fun experience every time you play with your friends.',
    href: '/world-war-two/custom-match',
    icon: faSliders,
  },
  {
    title: 'Loadout Info',
    description:
      'Get all the details on the weapons, attachments, perks, and equipment available in Call of Duty: WWII. A perfect resource for theory-crafting your next dominant class setup.',
    href: '/world-war-two/info',
    icon: faCircleInfo,
  },
];

export default function WorldWarTwoLandingPage() {
  return (
    <PageLayout containerClassName='theme-ww2'>
      <LandingPageComponent
        title='Call of Duty: WWII'
        subtitle="Your central hub for all things Call of Duty: World War Two. Below you'll find a suite of tools to enhance your gameplay, from generating random loadouts to creating custom matches for you and your friends."
        toolCards={toolCards}
        buttonVariant='ww2'
      />
    </PageLayout>
  );
}
