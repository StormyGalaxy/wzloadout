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
  title: 'Black Ops 3 Multiplayer Tools | Generator & Info Hub',
  description:
    'Your hub for Call of Duty: Black Ops 3 tools. Generate random classes for multiplayer and explore a complete info hub with details on weapons, perks, and more.',
  keywords: [
    'Black Ops 3',
    'BO3',
    'Black Ops 3 random class generator',
    'BO3 loadouts',
    'BO3 Specialists',
    'BO3 info hub',
    'COD BO3 generator',
    'black ops three rcg',
    'class generator',
  ],
};

const toolCards = [
  {
    title: 'Multiplayer Generator',
    description:
      'Master the advanced movement system. Generate random classes using the Pick 10 system and dominate the opposition with powerful Specialist abilities.',
    href: '/black-ops/three/generator',
    icon: faGun,
  },
  {
    title: 'Info Hub',
    description:
      'Get the tactical overview of the Black Ops 3 arsenal. Browse detailed information on Specialists, weapons, equipment, perks, and Zombies content like GobbleGums.',
    href: '/black-ops/three/info',
    icon: faCircleInfo,
  },
];

export default function BlackOpsThreeLandingPage() {
  return (
    <PageLayout containerClassName='theme-black-ops'>
      <LandingPageComponent
        title='Black Ops 3'
        subtitle='A dark, twisted future where a new breed of soldier emerges. Master advanced movement and devastating Specialist abilities with these tools.'
        toolCards={toolCards}
        buttonVariant='black-ops'
      />
    </PageLayout>
  );
}
