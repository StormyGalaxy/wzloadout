'use client';

import React, { useState, useEffect } from 'react';
// --- Components ---
import InfoList from '@/components/info/InfoList';
// --- Helpers ---
import { getWildcards } from '@/helpers/info/getWildcards';

interface ListProps {
  game: string;
  dataKeys?: Array<string>;
}

const defaultDataKeys = ['name', 'description', 'type', 'game', 'isDlc'];

export default function WildcardList({ game, dataKeys = defaultDataKeys }: ListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const dataList = getWildcards(game);
    setData(dataList);

    setIsLoading(false);
  }, [game]);
  return <>{!isLoading && <InfoList data={data} dataKeys={dataKeys} />}</>;
}
