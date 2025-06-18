'use client';

import React, { useState, useEffect } from 'react';
// --- Components ---
import InfoList from '@/components/info/InfoList';
// --- Helpers ---
import { getZombiesAmmoMods } from '@/helpers/info/zombies/getZombiesAmmoMods';

interface ListProps {
  game: string;
  dataKeys?: Array<string>;
}

const defaultDataKeys = ['name', 'type', 'game', 'isDlc'];

export default function ZombiesAmmoModList({ game, dataKeys = defaultDataKeys }: ListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const dataList = getZombiesAmmoMods(game);
    setData(dataList);

    setIsLoading(false);
  }, [game]);
  return <>{!isLoading && <InfoList data={data} dataKeys={dataKeys} />}</>;
}
