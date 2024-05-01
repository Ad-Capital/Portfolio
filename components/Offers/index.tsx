'use client';

import { useRef } from "react";
import styles from './style.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const word = "Meet the Front-End Architect Shaping Tomorrow's Web Experiences.";

export default function Index() {
    const container = useRef<HTMLDivElement>(null);
    const title1 = useRef<HTMLHeadingElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])
    return (
        <div ref={container} className={styles.container}>
             <div className={styles.body}>
                <h1>What To Expect</h1>
                <h1></h1>
                <div className={styles.subbody}>
                    <div className={styles.word}>
                        <h2>~Design</h2>
                        <p>
                            In my design process, I blend creativity with functionality. Expect meticulously crafted visuals that reflect your brand's identity, guiding users seamlessly through their digital journey.
                        </p>
                    </div>
                    <div className={styles.word}>
                        <h2>~Development</h2>
                        <p>
                            As a front-end developer, I'm dedicated to precision and innovation. Count on me to bring your visions to life with clean, efficient code that delivers flawless user experiences across devices.
                        </p>
                    </div>
                    <div className={styles.word}>
                        <h2>~All-Inclusive</h2>
                        <p>
                            When you choose me, you're getting more than just design or development – you're getting the full package. From concept to launch, I'm your partner in success, delivering holistic solutions that exceed expectations. Let's craft digital experiences that make a lasting impact together.
                        </p>
                    </div>
                </div>

            </div>
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    );
}
