"use client";

import React, { useState, useEffect } from "react";
// --- Components ---
import InfoList from "@/components/info/InfoList";
// --- Helpers ---
import { getWeapon } from "@/helpers/info/getWeapon";

interface ListProps {
  game: string;
  dataKeys?: Array<string>;
}

const defaultDataKeys = ["name", "type", "game", "no_attach"];

export default function WeaponList({
  game,
  dataKeys = defaultDataKeys,
}: ListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [types, setTypes] = useState<string[]>([]);

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
  }, []);
  return (
    <>
      {!isLoading && (
        <InfoList
          data={data}
          dataKeys={dataKeys}
          types={types}
          url={`/${game}/info/weapon`}
        />
      )}
    </>
  );
}
