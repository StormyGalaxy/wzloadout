// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WorldWarTwoClientComponent from '@/components/generators/world-war-two/WorldWarTwoClientComponent';

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

export default function WorldWarTwoLandingPage() {
  return (
    <PageLayout containerClassName='theme-ww2'>
      <WorldWarTwoClientComponent />
    </PageLayout>
  );
}
