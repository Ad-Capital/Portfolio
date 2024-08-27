'use client';

import Header from "@/components/header"
import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import Magnetic from "@/common/Magnetic";
import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";

const NavBar: React.FC = () => {
  const [scrollTarget, setScrollTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollTarget]);

  return (
    <header className='w-full absolute z-10'>
      <nav className=''>
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-8 bg-transparent"
        >
          <Link href='/'>
            <div className='flex justify-center items-center'>
              <h1 className="text-white font-bold text-3xl">AD</h1>
              {/* <Image
                src='/logo.png'
                alt='logo'
                width={77.4}
                height={77.4}
                className=''
              /> */}
            </div>
          </Link>

          <div className="hidden md:flex justify-center items-center gap-[20px]">
            <Magnetic>
              <Link href='/about'><p className="nav">About</p></Link>
            </Magnetic>
            <Magnetic>
              <a href="#explore" onClick={(e) => { e.preventDefault(); setScrollTarget(document.getElementById('explore')); }}>
                <p className="nav">Explore</p>
              </a>
            </Magnetic>
            <Magnetic>
              <Link href='/contact'><p className="nav">Contact</p></Link>
            </Magnetic>
          </div>
          <div className="md:hidden flex">
            <Header />
          </div>
          
        </motion.div>
      </nav>
    </header>
  );
};

export default NavBar;
