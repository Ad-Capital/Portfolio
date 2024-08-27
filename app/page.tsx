'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Footer, Hero, Preloader } from '@/components';
import { Contact, Explore } from '@/sections';

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();

            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = 'default';
                window.scrollTo(0, 0);
            }, 2000);
        })();
    }, []);

    return (
        <main>
            <AnimatePresence mode='wait'>
                {isLoading && <Preloader key="preloader" />}
            </AnimatePresence>
            <AnimatePresence mode='wait'>
                {!isLoading && (
                    <>
                        <Hero key="hero" />
                        <Explore key="explore" />
                        <Footer key="footer" />
                    </>
                )}
            </AnimatePresence>
        </main>
    );
};

export default Home;
