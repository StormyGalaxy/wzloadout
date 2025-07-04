'use client';

import React, { useState, useEffect } from 'react';
// --- Components ---
import InfoList from '@/components/info/InfoList';
// --- Helpers ---
import { getWeapon } from '@/helpers/info/getWeapon';

interface ListProps {
  game: string;
  link?: string;
  dataKeys?: Array<string>;
}

const defaultDataKeys = ['name', 'type', 'game', 'no_attach'];

export default function WeaponList({ game, link = '', dataKeys = defaultDataKeys }: ListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [types, setTypes] = useState<string[]>([]);
  const weaponUrl = link ? `/${link}/info/weapon` : `/${game}/info/weapon`;

  useEffect(() => {
    const tmp_types: string[] = [];
    const dataList = getWeapon(game);
    setData(dataList);

    //Format data
    for (const key in dataList) {
      const type = dataList[key].type;

      if (!tmp_types.includes(type)) {
        tmp_types.push(type);
      }
    }
    setTypes(tmp_types);

    setIsLoading(false);
  }, [game]);
  return (
    <>{!isLoading && <InfoList data={data} dataKeys={dataKeys} types={types} url={weaponUrl} />}</>
  );
}
