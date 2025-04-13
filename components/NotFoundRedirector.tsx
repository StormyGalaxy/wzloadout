"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Define or import your redirects map
const redirects: Record<string, string> = {
  "/black-ops": "/",
  "/black-ops-2": "/",
  "/bo3": "/black-ops/three",
  "/ghost": "/",
  "/infinite-warfare": "/",
  "/modern-warfare": "/",
  "/modern-warfare-2": "/",
  "/modern-warfare-3": "/",
  "/world-war-2": "/",
  "/contactus": "https://shop.silocitylabs.com/policies/contact-information",
  "/shoutouts": "/",
  "/statistics": "/",
  //Black Ops 3
  "/black-ops-three/generator": "/black-ops/three/generator",
  //Black Ops 4
  "/black-ops-four/generator": "/black-ops/four/generator",
  "/black-ops-four/zombies-generator": "/black-ops/four/zombies/generator",
  "/black-ops-four/info": "/black-ops/four/info",
  //Black Ops: Cold War
  "/cold-war/generator": "/black-ops/cold-war/generator",
  "/cold-war/zombies-generator": "/black-ops/cold-war/zombies-generator",
  "/cold-war/info": "/black-ops/cold-war/info",
  //Black Ops 6
  "/black-ops-6/generator": "/black-ops/six/generator",
  "/black-ops-six/generator": "/black-ops/six/generator",
  "/black-ops-6/zombies-generator": "/black-ops/six/zombies-generator",
  "/black-ops-six/zombies-generator": "/black-ops/six/zombies-generator",
  "/black-ops-six/info": "/black-ops/six/info",
};

export default function NotFoundRedirector() {
  const router = useRouter();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const newPath = redirects[currentPath];

    if (newPath) {
      if (window.location.pathname !== newPath) {
        router.replace(newPath);
      }
    }
  }, [router]);

  return null;
}
