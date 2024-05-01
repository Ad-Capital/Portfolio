'use client';

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import { Footer, Hero, Preloader } from '@/components'
import { Contact, Explore } from '@/sections';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])
  return (
    <main className='relative'>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <Explore />
      <Footer />
    </main>
  );
}
