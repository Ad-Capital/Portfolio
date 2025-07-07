'use client';

import { useRef } from "react";
import styles from './style.module.scss';
import Picture1 from '@/public/Earth_Inc.png';
import Picture2 from '@/public/HubLanding.png';
import Picture3 from '@/public/Ruut.png';
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
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

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
                <h1>About Me</h1>
                <div className={styles.word}>
                    <p>
                        Hey again, I’m Adrian, also known as Isaac.
                    </p>
                    <p>
                        A Web Developer and Designer who loves building websites that look stunning
                        and perform effortlessly. My focus is on blending clean, functional design
                        with robust technology to create online experiences that truly work for your
                        business or personal brand.
                    </p>
                </div>
                <div className={styles.word}>
                    <p>
                        With a background in both design and development,
                        I don’t just code, I craft solutions. From wireframes to deployment,
                        I pay attention to every detail so your website feels like you.
                    </p>
                </div>
                <div className={styles.word}>
                    <span className={styles.title}>What I Do</span>
                    <p>
                        Design: Modern, user-centered visuals that reflect your brand.
                    </p>
                    <p>
                        Development: Fully responsive, optimized websites that work seamlessly across all devices.
                    </p>
                    <p>
                        Redesign: Elevate your existing site with a fresh look and better functionality.
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
            <div className={styles.body2}>
                <div className={styles.word}>
                    <span className={styles.title}>Why Clients Work with Me</span>
                    <p>
                        I bring a blend of creative design and technical expertise that ensures every project looks great and functions seamlessly.
                    </p>
                    <p>
                        I make the process straightforward. No jargon - just practical advice and results.
                    </p>
                    <p>
                        I’m all about creating designs and websites that are intuitive, effective, and uniquely yours.
                    </p>
                </div>
            </div>
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    );
}
