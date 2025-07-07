'use client';

import  MobileNav  from '@/components/MobileNav';
import Image from 'next/image';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';

const Index: React.FC = () => {
  const header = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const pathname = usePathname(); // Get current path
  const button = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (button.current) {
      gsap.to(button.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          onLeave: () => {
            gsap.to(button.current, {
              scale: 1,
              duration: 0.25,
              ease: 'power1.out',
            });
          },
          onEnterBack: () => {
            gsap.to(button.current, {
              scale: 0,
              duration: 0.25,
              ease: 'power1.out',
            });
            setIsActive(false); // Ensure menu closes on scroll
          },
        },
      });
    }
  }, []);

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          <a href="/">
            <Image src={'/AD Hub W.png'} width={70} height={70} alt="logo" />
          </a>
        </div>
        <div className={styles.nav}>
          <Magnetic>
            <div className={styles.el}>
              <a href='/work' className={pathname === '/work' ? styles.active : ''}>Work</a>
              <div className={`${styles.indicator} ${pathname === '/work' ? styles.activeIndicator : ''}`}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a href='/about' className={pathname === '/about' ? styles.active : ''}>About</a>
              <div className={`${styles.indicator} ${pathname === '/about' ? styles.activeIndicator : ''}`}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a href='/contact' className={pathname === '/contact' ? styles.active : ''}>Contact</a>
              <div className={`${styles.indicator} ${pathname === '/contact' ? styles.activeIndicator : ''}`}></div>
            </div>
          </Magnetic>
        </div>
        {/* <div className={styles.mobileNav}>
          <MobileNav />
        </div> */}
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded backgroundColor='gray' onClick={() => setIsActive(!isActive)} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  );
};

export default Index;
