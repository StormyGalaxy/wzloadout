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
  title: 'Call of Duty: Vanguard Loadout, Class & Zombies Generators',
  description:
    'The definitive hub for Call of Duty: Vanguard tools. Generate random multiplayer and zombies classes, and explore our detailed information hub for weapons, perks, and more. Your ultimate companion for COD: Vanguard!',
  keywords: [
    'Call of Duty Vanguard',
    'COD Vanguard',
    'Vanguard random class generator',
    'COD Vanguard loadouts',
    'Vanguard zombies generator',
    'Vanguard info hub',
    'Call of Duty Vanguard generator',
    'COD Vanguard RCG',
    'treyarch zombies',
  ],
};

const toolCards = [
  {
    title: 'Multiplayer Generator',
    description:
      'Break the mold of your usual classes. Spice up your multiplayer matches with a randomly generated loadout and discover new winning strategies.',
    href: '/vanguard/generator',
    icon: faGun,
  },
  {
    title: 'Zombies Generator',
    description:
      "Challenge the undead with a random loadout. See how long you can survive Der Anfang and Terra Maledicta with the weapons, covenants, and artifacts you're given.",
    href: '/vanguard/zombies-generator',
    icon: faSkull,
  },
  {
    title: 'Info Hub',
    description:
      'Get all the details on the weapons, attachments, perks, and equipment available in Vanguard. A perfect resource for theory-crafting your next class setup.',
    href: '/vanguard/info',
    icon: faCircleInfo,
  },
];

export default function VanguardLandingPage() {
  return (
    <PageLayout containerClassName='theme-vanguard'>
      <LandingPageComponent
        title='Call of Duty: Vanguard'
        subtitle="Your central hub for all things Call of Duty: Vanguard. Below you'll find a suite of tools to enhance your gameplay, from generating random loadouts to exploring in-depth gear info."
        toolCards={toolCards}
        buttonVariant='danger'
      />
    </PageLayout>
  );
}
