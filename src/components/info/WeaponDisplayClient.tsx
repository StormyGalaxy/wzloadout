'use client';

import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
// --- Next ---
import { useRouter, useSearchParams } from 'next/navigation';
// --- Components ---
import WeaponInfo from '@/components/info/WeaponInfo';
// --- Helpers ---
import { capitalizeFirstLetter } from '@silocitypages/utils';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// Define props for the component
interface WeaponDisplayClientProps {
  game: string;
}

export default function WeaponDisplayClient({ game }: WeaponDisplayClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState<string | null>(null);

  const displayGameName = capitalizeFirstLetter(game, '-');

  useEffect(() => {
    const valueParam = searchParams?.get('value') ?? '';

    if (valueParam === null) {
      router.replace('/404');
      return;
    }

    setValue(valueParam);
    setIsLoading(false);
  }, [searchParams, router]);

  return (
    <Col>
      <div className='text-center mb-4'>
        <h2 className={styles.pageTitle}>{displayGameName}</h2>
        <p className={styles.pageSubtitle}></p>
      </div>

      {!isLoading && value && <WeaponInfo value={value} game={game} />}
      {isLoading && <p className='text-center'>Loading weapon data...</p>}
    </Col>
  );
}
