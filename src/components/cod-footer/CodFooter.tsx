'use client';

// --- React ---
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
// --- Next ---
import Image from 'next/image';
import Link from 'next/link';
// --- Styles ---
import styles from './CodFooter.module.css';

function CodFooter() {
  const currentYear = new Date().getFullYear();
  const copyrightStartYearDB = 2003;
  const copyrightStartYearActivision = 1979;

  return (
    <footer className={styles.codFooter}>
      <Container className='py-3 py-md-4'>
        <div className='d-md-flex justify-content-md-between align-items-md-center text-center text-md-start'>
          <div className={`${styles.footerCopyright} mb-3 mb-md-0`}>
            All content & design © Call Of Duty, {copyrightStartYearDB}-{currentYear}.
            <br />
            Call Of Duty images & names © {copyrightStartYearActivision}-{currentYear} Activision.
            <p className={styles.copyrightSection}>
              <Link href='/' target='_blank'>
                {process.env.NEXT_PUBLIC_APP_NAME}
              </Link>{' '}
              by{' '}
              <a
                href={process.env.NEXT_PUBLIC_FOOTER_COPYRIGHT_URL}
                target='_blank'
                rel='noopener noreferrer'>
                {process.env.NEXT_PUBLIC_FOOTER_COPYRIGHT}
              </a>{' '}
              is licensed under{' '}
              <a
                href='https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1'
                target='_blank'
                rel='license noopener noreferrer'
                style={{ display: 'inline-block' }}>
                CC BY-NC-SA 4.0
                <Image
                  style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
                  src='https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1'
                  alt='cc'
                  height={20}
                  width={20}
                />
                <Image
                  style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
                  src='https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1'
                  alt='by'
                  height={20}
                  width={20}
                />
                <Image
                  style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
                  src='https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1'
                  alt='nc'
                  height={20}
                  width={20}
                />
                <Image
                  style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
                  src='https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1'
                  alt='sa'
                  height={20}
                  width={20}
                />
              </a>
            </p>
          </div>

          <Nav className={`${styles.footerNav} justify-content-center justify-content-md-end`}>
            <Nav.Item>
              <Nav.Link href='/about' className={`${styles.footerLink} px-2`}>
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/terms' className={`${styles.footerLink} px-2`}>
                Terms
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/privacy' className={`${styles.footerLink} px-2`}>
                Privacy Policy
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Container>
    </footer>
  );
}

export default CodFooter;
