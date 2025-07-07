'use client';
import styles from './style.module.scss';
import React, { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Home: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;
    if (isActive) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
    return () => {
      body.classList.remove('no-scroll');
    };
  }, [isActive]);
  
  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div onClick={() => setIsActive(!isActive)} className={styles.button}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  );
};

export default Home;