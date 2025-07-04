import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import Hero from '@/components/generators/warzone/where-we-droppin/Hero';
import HowItWorks from '@/components/generators/warzone/where-we-droppin/HowItWorks';
import WhereWeDroppinSection from '@/components/generators/warzone/where-we-droppin/WhereWeDroppinSection';
import Why from '@/components/generators/warzone/where-we-droppin/Why';
// --- Styles ---
import '@/public/styles/where-we-droppin.css';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Warzone Random Drop Zone Generator | All Maps (BR & Resurgence)',
  description:
    "Can't decide where to land in Call of Duty: Warzone? Use our random drop zone generator for all current Battle Royale and Resurgence maps, including Verdansk, Urzikstan, Rebirth Island, and more. Add a new layer of challenge to every match!",
  keywords: [
    'Warzone random drop',
    'Where We Droppin',
    'Warzone drop spot generator',
    'COD Warzone',
    'Random drop picker',
    'Verdansk drop spots',
    'Urzikstan drop spots',
    'Rebirth Island drops',
    'Warzone landing spot',
    'Battle Royale',
    'Resurgence',
  ],
};

export default function WhereWeDroppinPage() {
  return (
    <PageLayout containerClassName='theme-warzone'>
      <Hero />
      <HowItWorks />
      <WhereWeDroppinSection />
      <Why />
    </PageLayout>
  );
}
