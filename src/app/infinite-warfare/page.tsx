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
  title: 'Infinite Warfare Tools | Multiplayer Generator & Info Hub',
  description:
    'Your hub for Call of Duty: Infinite Warfare tools. Generate random multiplayer classes featuring unique Combat Rigs and explore detailed information on all weapons, perks, and equipment.',
  keywords: [
    'Infinite Warfare',
    'IW',
    'Call of Duty Infinite Warfare',
    'IW random class generator',
    'IW loadouts',
    'Infinite Warfare Combat Rigs',
    'IW info hub',
    'COD IW generator',
    'infinite warfare rcg',
    'class generator',
  ],
};

const toolCards = [
  {
    title: 'Multiplayer Generator',
    description:
      'Take the fight to the solar system. Generate random classes with unique weapons, perks, and one of six powerful Combat Rigs to dominate the opposition.',
    href: '/infinite-warfare/generator',
    icon: faGun,
  },
  {
    title: 'Info Hub',
    description:
      'Get the tactical overview of the Infinite Warfare arsenal. Browse detailed information on all Combat Rigs, weapons, equipment, and scorestreaks.',
    href: '/infinite-warfare/info',
    icon: faCircleInfo,
  },
];

export default function InfiniteWarfareLandingPage() {
  return (
    <PageLayout containerClassName='theme-infinite-warfare'>
      <LandingPageComponent
        title='Call of Duty: Infinite Warfare'
        subtitle="Venture to the final frontier. Below you'll find a suite of tools to enhance your futuristic combat experience, from generating random loadouts to exploring detailed intel."
        toolCards={toolCards}
        buttonVariant='infinite-warfare'
        textOutline={true}
      />
    </PageLayout>
  );
}
