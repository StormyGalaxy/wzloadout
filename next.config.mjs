import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';
import * as dotenv from 'dotenv';

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    dotenv.config({ path: '.env.local' });
  } else {
    dotenv.config({ path: '.env.production' });
  }

  return {
    ...defaultConfig,
    reactStrictMode: true,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/bootstrap-nextjs-github-pages/' : '',
  };
};

export default nextConfig;