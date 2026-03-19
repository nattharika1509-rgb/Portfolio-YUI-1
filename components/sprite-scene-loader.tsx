"use client";

import dynamic from "next/dynamic";
import React from "react";

const SpriteScene = dynamic(() => import("./sprite-scene"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 pastel-gradient" />,
});

export default SpriteScene;
