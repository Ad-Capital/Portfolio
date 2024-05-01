'use client';

import { useRef } from "react";
import styles from './style.module.scss';
import Picture1 from '@/public/medias/1.jpg';
import Picture2 from '@/public/medias/2.jpg';
import Picture3 from '@/public/medias/3.jpeg';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';

const word = "Meet the Front-End Architect Shaping Tomorrow's Web Experiences.";

export default function Index() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const images = [
        {
            src: Picture1,
            y: 0
        },
        {
            src: Picture2,
            y: lg
        },
        {
            src: Picture3,
            y: md
        }
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.body}>
                <h1>About</h1>
                <h1>Trader AD</h1>
                <div className={styles.word}>
                    <p>
                        Welcome to my corner of the web. I'm Adrian, a multifaceted professional excelling as a Designer, Front-End Developer, and Technical Analyst.
                    </p>
                    <p>
                        In addition to my expertise in web technology and financial analysis, I find inspiration in the realms of music and art. Whether it's exploring new melodies or experimenting with different artistic mediums, I thrive on creative expression beyond Web Tech and the financial world.
                    </p>
                    <p>
                        As a Designer, I infuse aesthetics with functionality, creating designs that not only reflect your brand identity but also elevate the user experience. Whether it's crafting pixel-perfect layouts or selecting the perfect color palette, I'm dedicated to delivering designs that resonates with your audience.
                    </p>
                    <p>
                        As a Front-End Developer, I breathe life into designs, meticulously ensuring they not only to look amazing but also provide seamless user experiences across devices. With a keen eye for detail, I strive to create interfaces that captivate and engage users from the moment they land on a page.
                    </p>
                    <p>
                        As a Techincal Analyst specializing in trading, I rely on comprehensive market research and deep understanding of market dynamics to make informed trading decisions. By analysing price action, market sentiment, and macroeconomic trends, I identify strategic opportunities and optimize trading strategies for sucess without relying on traditional technical indicators.
                    </p>
                    <p>
                        With a passion for innovation and a commitment to perfection, I'm dedicated to bringing your vision to life in the digital realm. Let's collaborate to create something extraordinary.
                    </p>
                </div>
            </div>
            <div className={styles.images}>
                {images.map(({ src, y }, i) => (
                    <motion.div style={{ y }} key={`i_${i}`} className={styles.imageContainer}>
                        <Image
                            src={src}
                            placeholder="blur"
                            alt="image"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
