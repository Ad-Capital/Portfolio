'use client';

import { useRef } from "react";
import styles from '@/app/about/page.module.scss';
import Picture2 from '@/public/medias/2.jpg';
import Picture1 from '@/public/medias/Adrian.png';
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
                <motion.h1 style={{ y: sm }}>Driving Digital Innovaton</motion.h1>
                <h1></h1>
                <div className={styles.word}>
                    <p>
                        {word.split("").map((letter, i) => {
                            const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -20) - 20]);
                            return <motion.span style={{ top: y }} key={`l_${i}`} >{letter}</motion.span>;
                        })}
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
                            className="rounded-xl"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
