"use client";

import React, { useState, useEffect } from "react";
// --- Components ---
import InfoList from "@/components/info/InfoList";
// --- Helpers ---
import { getZombiesFieldUpgrade } from "@/helpers/info/zombies/getZombiesFieldUpgrade";

interface ListProps {
  game: string;
  dataKeys?: Array<string>;
}

const defaultDataKeys = ["name", "type", "game"];

export default function ZombiesArtifactsList({
  game,
  dataKeys = defaultDataKeys,
}: ListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const dataList = getZombiesFieldUpgrade(game);
    setData(dataList);

    setIsLoading(false);
  }, []);
  return <>{!isLoading && <InfoList data={data} dataKeys={dataKeys} />}</>;
}
