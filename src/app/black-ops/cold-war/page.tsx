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
  title: 'Black Ops Cold War Loadout & Class Generators',
  description:
    'The ultimate companion for Black Ops Cold War. Generate random loadouts for multiplayer and zombies, and explore a complete info hub with details on weapons, perks, and more.',
  keywords: [
    'Black Ops Cold War',
    'COD Cold War',
    'Cold War random class generator',
    'BOCW loadouts',
    'Cold War zombies generator',
    'Cold War info hub',
    'COD Cold War generator',
    'class generator',
    'zombies',
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
    title: 'Zombies Generator',
    description:
      'Survive the Dark Aether with a random loadout. This generator will equip you with a random class, field upgrade, and starting weapon for your next undead encounter.',
    href: '/black-ops/cold-war/zombies-generator',
    icon: faSkull,
  },
  {
    title: 'Info Hub',
    description:
      'Get the intel on the entire Black Ops Cold War arsenal. Browse detailed information on weapons, perks, equipment, scorestreaks, and zombies content.',
    href: '/black-ops/cold-war/info',
    icon: faCircleInfo,
  },
];

export default function BlackOpsColdWarLandingPage() {
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
