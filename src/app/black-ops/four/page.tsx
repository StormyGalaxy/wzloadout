// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import LandingPageComponent from '@/components/common/LandingPageComponent';
// --- Font Awesome ---
import { faGun, faSkull, faVial, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Black Ops 4 Loadout & Class Generators',
  description:
    'Your hub for Black Ops 4 tools. Generate random loadouts for multiplayer and zombies, and explore a complete info hub with details on specialists, weapons, perks, and more.',
  keywords: [
    'Black Ops 4',
    'BO4',
    'Black Ops 4 random class generator',
    'BO4 loadouts',
    'Black Ops 4 zombies generator',
    'BO4 info hub',
    'COD BO4 generator',
    'black ops four rcg',
    'bo4 rcg',
    'class generator',
    'zombies',
  ],
};

const toolCards = [
  {
    title: 'Multiplayer Generator',
    description:
      'Master the art of the specialist. Generate random classes with unique weapons, gear, and perks to dominate the opposition.',
    href: '/black-ops/four/generator',
    icon: faGun,
  },
  {
    title: 'Zombies Generator',
    description:
      'Defy death in the Chaos and Aether stories. Generate a random loadout with different elixirs, talismans, and starting weapons for your next adventure.',
    href: '/black-ops/four/zombies/generator',
    icon: faSkull,
  },
  {
    title: 'Zombies Custom Mutations',
    description:
      'Craft your ideal zombies challenge. Fine-tune dozens of rules for players, zombies, and the game itself to create a unique, shareable experience.',
    href: '/black-ops/four/zombies/custom-mutations',
    icon: faVial,
  },
  {
    title: 'Info Hub',
    description:
      'Get the tactical overview of the Black Ops 4 arsenal. Browse detailed information on specialists, weapons, equipment, scorestreaks, and zombies content.',
    href: '/black-ops/four/info',
    icon: faCircleInfo,
  },
];

export default function BlackOpsFourLandingPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <LandingPageComponent
        title='Black Ops 4'
        subtitle='Specialists, classic multiplayer, and two epic Zombies sagas await. Here are the tools to master every aspect of Black Ops 4.'
        toolCards={toolCards}
        buttonVariant='black-ops'
      />
    </PageLayout>
  );
}
