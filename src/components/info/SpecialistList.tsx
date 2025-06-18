'use client';

import React, { useState, useEffect } from 'react';
// --- Components ---
import InfoList from '@/components/info/InfoList';
// --- Helpers ---
import { getSpecialists } from '@/helpers/info/getSpecialists';

interface ListProps {
  game: string;
  dataKeys?: Array<string>;
}

const defaultDataKeys = ['name', 'payload', 'trait', 'type', 'game'];

export default function SpecialistList({ game, dataKeys = defaultDataKeys }: ListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const dataList = getSpecialists(game);

    //Format data
    for (const key in dataList) {
      const item = dataList[key];

      // Join the names with commas
      if (item.payload && Array.isArray(item.payload)) {
        item.payload = item.payload.join(', ');
        item.trait = item.trait.join(', ');
      }
    }

    setData(dataList);

    setIsLoading(false);
  }, [game]);

  return <>{!isLoading && <InfoList data={data} dataKeys={dataKeys} />}</>;
}
