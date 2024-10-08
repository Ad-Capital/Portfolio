'use client';

import { useRef } from "react";
import styles from './style.module.scss';
import Picture1 from '@/public/Social.png';
import Picture2 from '@/public/Blog.png';
import Picture3 from '@/public/estate.png';
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
                <h1>About Me</h1>
                <div className={styles.word}>
                    <p>
                        Hey, I’m Adrian, also known as Isaac.
                    </p>
                    <p>
                        I’m a frontend developer, artist, and digital creator who’s all about making unique digital experiences. I combine creativity and tech know-how to bring ideas to life, building stuff that works great and really connects with people.
                    </p>
                </div>
                <div className={styles.word}>
                    <span className={styles.title}>What I Do</span>
                    <p>
                        I focus on frontend development, using modern tools like React and Next.js, with TypeScript to make sure everything's solid and scalable. On top of coding, I also create sleek user interfaces that are both functional and great to look at.
                    </p>
                </div>
                <div className={styles.word}>
                    <span className={styles.title}>My Journey</span>
                    <p>
                        Over the years, I’ve taken on all kinds of projects that mix art, tech, and innovation. Whether it’s designing portfolios, crafting digital experiences, or diving deep into Web3, I’m always about pushing boundaries and creating work that leaves a mark.
                    </p>
                    <p>
                        Some of the standout projects I’ve worked on include:
                    </p>
                    <p>
                        <span className={styles.title}>Earth Inc</span> 
                        <br />
                        I developed a platform focused on the buying and selling of art,
                        providing a space for artists to showcase and sell their work.
                        The platform also includes features like user profiles, secure
                        payment integration, a marketplace for art-related products,
                        and a community space where users can interact, share insights,
                        and explore curated collections.
                    </p>
                    <p>
                        <span className={styles.title}>AD Hub:</span>
                        <br />
                        I’m currently developing AD Hub, a blog website that covers a diverse range of topics
                        including art, fashion, music, food, travel, design, coding, and technical analysis in
                        forex trading. The platform is designed to be visually engaging and user-friendly,
                        blending modern design elements with a seamless user experience. From content layout
                        to functionality, the goal is to create a space where readers can easily explore and
                        engage with insightful articles across multiple industries.
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
