'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import styles from './page.module.scss';
import ZoomParallax from '@/sections/About/ZoomParallax';
import Aboutloader from "@/sections/About/Aboutloader"
import Headline from "@/sections/About/Headline"
import Offers from "@/sections/About/Offers"
import Personal from "@/sections/About/Personal"
import Footer from "@/sections/Footer"

export default function Home() {
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
        <main className={styles.main}>
            <AnimatePresence mode='wait'>
                {isLoading && <Aboutloader key="preloader" />}
            </AnimatePresence>
            <ZoomParallax />
            <Headline />
            <Personal />
            <Offers />
            <Footer />
        </main>

    );
}
