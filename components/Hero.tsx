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
      "/pnl.jpg",
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail:
      "/sandman.jpg",
  },
  {
    title: "Rogue",
    link: "/",
    thumbnail:
      "/goldman.jpg",
  },

  {
    title: "Editorially",
    link: "/",
    thumbnail:
      "/flowergirl.jpg",
  },
  {
    title: "Editrix AI",
    link: "/",
    thumbnail:
      "/comfort.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "/",
    thumbnail:
      "/maze.jpg",
  },

  {
    title: "Algochurn",
    link: "/",
    thumbnail:
      "/dude.jpg",
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
      "/dark.jpg",
  },
  {
    title: "SmartBridge",
    link: "/",
    thumbnail:
      "/joker.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "/",
    thumbnail:
      "/culture.png",
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
      "/bybit.jpg",
  },
  {
    title: "Invoker Labs",
    link: "/",
    thumbnail:
      "/rock.jpeg",
  },
  {
    title: "E Free Invoice",
    link: "/",
    thumbnail:
      "/ecommerce.png",
  },
];