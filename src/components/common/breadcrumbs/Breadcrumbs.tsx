'use client';

import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbLink {
  /** The URL for the link. If omitted, the item will be treated as the active page. */
  href?: string;
  /** The text to display for the breadcrumb item. */
  text: string;
}

interface BreadcrumbsProps {
  /** An array of link objects to build the breadcrumb trail. */
  links: BreadcrumbLink[];
  /** Optional class name to apply to the container. */
  className?: string;
  /** Apply a text outline for better readability on light backgrounds. */
  textOutline?: boolean;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links, className, textOutline = false }) => {
  // Combine the base class, any passed className, and the conditional text-outline class.
  const containerClasses = [
    styles.breadcrumbContainer,
    className,
    textOutline ? styles.textOutline : '',
  ]
    .filter(Boolean) // Remove any falsy values (like empty strings)
    .join(' ');

  return (
    <Breadcrumb className={containerClasses}>
      <Breadcrumb.Item linkAs={Link} href='/'>
        <FontAwesomeIcon icon={faHouse} />
        <span className='visually-hidden'>Home</span>
      </Breadcrumb.Item>

      {links.map((link, index) => {
        const isLast = index === links.length - 1;
        return (
          <Breadcrumb.Item
            key={index}
            href={link.href}
            linkAs={isLast ? 'span' : Link} // Render the last item as a span, not a link
            active={isLast}>
            {link.text}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
