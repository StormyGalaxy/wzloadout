'use client';

// --- React ---
import React from 'react';
// --- Components ---
import Header from '@/components/Header';
import CodFooter from '@/components/cod-footer/CodFooter';

interface NavLink {
  label: string;
  href: string;
  target?: string;
}

interface PageLayoutProps {
  children: React.ReactNode;
  headerClassName?: string;
  footerClassName?: string;
  navLinks?: NavLink[];
  showHeader?: boolean;
  showFooter?: boolean;
  headerDarkLinks?: boolean;
  headerShowBadge?: boolean;
  containerClassName?: string;
  contentClassName?: string;
}

export default function PageLayout({
  children,
  headerClassName = '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  footerClassName = '',
  navLinks = [],
  showHeader = true,
  showFooter = true,
  headerDarkLinks = false,
  headerShowBadge = false,
  containerClassName = '',
  contentClassName = '',
}: PageLayoutProps) {
  return (
    <div className={`main-container ${containerClassName}`}>
      {showHeader && (
        <Header
          className={headerClassName}
          navLinks={navLinks}
          darkLinks={headerDarkLinks}
          showBadge={headerShowBadge}
        />
      )}
      <main className={`main-content ${contentClassName}`}>{children}</main>
      {showFooter && <CodFooter />}
    </div>
  );
}
