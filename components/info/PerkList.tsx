"use client";

import React, { useState, useEffect } from "react";
// --- Components ---
import InfoList from "@/components/info/InfoList";
// --- Helpers ---
import { getPerk } from "@/helpers/info/getPerk";

interface ListProps {
  game: string;
  dataKeys?: Array<string>;
}

const defaultDataKeys = ["name", "type", "game"];

export default function PerkList({
  game,
  dataKeys = defaultDataKeys,
}: ListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const dataList = getPerk(game);
    setData(dataList);

    setIsLoading(false);
  }, [game]);
  return <>{!isLoading && <InfoList data={data} dataKeys={dataKeys} />}</>;
}
