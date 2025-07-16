import { Suspense } from 'react';
// --- Next ---
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
// --- Components ---
import { GoogleAnalytics } from '@silocitypages/ui-core';

// --- Styles ---
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/public/styles/_fw.css';
import './globals.css';

// --- Environment Variables ---
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_APP_GA_TRACKING_ID;
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'SiloCityPages';
const APP_DESC = process.env.NEXT_PUBLIC_APP_DESC || 'Default description';
const APP_KEYWORDS = process.env.NEXT_PUBLIC_APP_KEYWORDS || 'default, keywords';

// --- Metadata ---
export const metadata: Metadata = {
  title: { default: APP_NAME, template: `%s | ${APP_NAME}` },
  description: APP_DESC,
  keywords: APP_KEYWORDS?.split(',').map((k) => k.trim()),
  manifest: '/manifest.json',
  appleWebApp: { title: 'COD RCG', statusBarStyle: 'default', capable: true },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    // For the Apple touch icon
    apple: { url: '/apple-icon.png', type: 'image/png' },
  },
};

// --- Viewport ---
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#f8f9fa',
};

// Setup a font
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}

        {GA_TRACKING_ID && (
          <Suspense fallback={null}>
            <GoogleAnalytics gaId={GA_TRACKING_ID} />
          </Suspense>
        )}
      </body>
    </html>
  );
}
