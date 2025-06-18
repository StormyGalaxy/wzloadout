'use client';

import React, { useState, useEffect } from 'react';
// --- Components ---
import InfoList from '@/components/info/InfoList';
// --- Helpers ---
import { getZombiesAugments } from '@/helpers/info/zombies/getZombiesAugments';

interface ListProps {
  game: string;
  dataKeys?: Array<string>;
}

const defaultDataKeys = ['name', 'description', 'minor', 'major', 'type', 'game', 'isDlc'];

export default function ZombiesAugmentList({ game, dataKeys = defaultDataKeys }: ListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const dataList = getZombiesAugments(game);

    //Format data
    for (const key in dataList) {
      const item = dataList[key];

      if (item.minor && Array.isArray(item.minor)) {
        const minorNames = item.minor.map((minor) => minor.name);
        const majorNames = item.major.map((major) => major.name);

        // Join the names with commas
        item.minor = minorNames.join(', ');
        item.major = majorNames.join(', ');
      }
    }

    setData(dataList);

    setIsLoading(false);
  }, [game]);
  return <>{!isLoading && <InfoList data={data} dataKeys={dataKeys} />}</>;
}
