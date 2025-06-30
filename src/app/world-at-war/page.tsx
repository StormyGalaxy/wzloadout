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
  title: 'Call of Duty: World at War Tools | Generator & Info Hub',
  description:
    'Your hub for Call of Duty: World at War tools. Generate random multiplayer classes and explore a complete info hub with details on all classic weapons and perks.',
  keywords: [
    'Call of Duty World at War',
    'WaW',
    'World at War random class generator',
    'WaW loadouts',
    'COD WaW generator',
    'world at war rcg',
    'class generator',
  ],
};

const toolCards = [
  {
    title: 'Multiplayer Generator',
    description:
      'Return to the gritty battlefields of WWII. Generate random classes with classic weapons and perks to challenge your skills in the original boots-on-the-ground combat.',
    href: '/world-at-war/generator',
    icon: faGun,
  },
  {
    title: 'Loadout Info',
    description:
      'Get the intel on the entire World at War arsenal. Browse detailed information on all the iconic weapons, equipment, and perks from the era.',
    href: '/world-at-war/info',
    icon: faCircleInfo,
  },
];

export default function WorldAtWarLandingPage() {
  return (
    <PageLayout containerClassName='theme-waw'>
      <LandingPageComponent
        title='Call of Duty: World at War'
        subtitle="Experience the intensity of World War II combat. Below you'll find a suite of tools to master the classic gameplay, from generating loadouts to exploring in-game intel."
        toolCards={toolCards}
        buttonVariant='secondary'
      />
    </PageLayout>
  );
}
