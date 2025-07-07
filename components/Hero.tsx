"use client";

import React from "react";
import { HeroParallax } from "../components/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "/",
    thumbnail:
      "/corporate.jpg",
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail:
      "/business.jpg",
  },
  {
    title: "Rogue",
    link: "/",
    thumbnail:
      "/travelnorth.jpg",
  },

  {
    title: "Editorially",
    link: "/",
    thumbnail:
      "/visual.jpg",
  },
  {
    title: "Editrix AI",
    link: "/",
    thumbnail:
      "/meta.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "/",
    thumbnail:
      "/girl.jpg",
  },

  {
    title: "Algochurn",
    link: "/",
    thumbnail:
      "/neon.jpg",
  },
  {
    title: "Aceternity UI",
    link: "/",
    thumbnail:
      "/AD.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "/",
    thumbnail:
      "/thumb4.jpg",
  },
  {
    title: "SmartBridge",
    link: "/",
    thumbnail:
      "/thumb2.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "/",
    thumbnail:
      "/thumb3.jpg",
  },

  {
    title: "Earth Inc",
    link: "/",
    thumbnail:
      "/Earth_Inc.png",
  },
  {
    title: "Golden Bells Academy",
    link: "/",
    thumbnail:
      "/estate.png",
  },
  {
    title: "Invoker Labs",
    link: "/",
    thumbnail:
      "/thumb1.jpg",
  },
  {
    title: "E Free Invoice",
    link: "/",
    thumbnail:
      "/ecommerce.png",
  },
];