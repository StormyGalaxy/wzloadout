// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import LandingPageComponent from '@/components/common/LandingPageComponent';
// --- Font Awesome ---
import { faGun, faCircleInfo, faParachuteBox } from '@fortawesome/free-solid-svg-icons';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Call of Duty: Warzone - Loadout, Drop Zone & Class Generators',
  description:
    'Your ultimate hub for Call of Duty: Warzone. Generate random loadouts, get a random drop zone with "Where We Droppin?", and explore detailed info on weapons, perks, and equipment. Enhance your Battle Royale experience!',
  keywords: [
    'Call of Duty Warzone',
    'COD Warzone',
    'Warzone random class generator',
    'Warzone loadouts',
    'Where We Droppin',
    'Warzone random drop',
    'Warzone info hub',
    'Battle Royale',
  ],
};

const toolCards = [
  {
    title: 'Loadout Generator',
    description:
      'Challenge yourself with a completely random loadout. Discover new meta and off-meta weapon combinations to dominate the battlefield.',
    href: '/warzone/generator',
    icon: faGun,
  },
  {
    title: 'Where We Droppin?',
    description:
      "Can't decide where to land? Let fate choose your next drop spot for an extra layer of challenge and unpredictability in your match.",
    href: '/warzone/where-we-droppin',
    icon: faParachuteBox,
  },
  {
    title: 'Info Hub',
    description:
      'Get all the details on the weapons, attachments, perks, and equipment available in Warzone. A perfect resource for theory-crafting your next dominant class setup.',
    href: '/warzone/info',
    icon: faCircleInfo,
  },
];

export default function WarzoneLandingPage() {
  return (
    <PageLayout containerClassName='theme-warzone'>
      <LandingPageComponent
        title='Call of Duty: Warzone'
        subtitle="Your central hub for all things Call of Duty: Warzone. Below you'll find a suite of tools to enhance your gameplay, from generating random loadouts to picking your next drop zone."
        toolCards={toolCards}
        buttonVariant='success'
      />
    </PageLayout>
  );
}
