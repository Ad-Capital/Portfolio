'use client';

import { useRef } from "react";
import styles from './style.module.scss';
import { navVariants, slideIn } from "@/utils/motion";
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
                        <motion.h2
                            variants={slideIn}
                            initial="hidden"
                            whileInView="show">
                            ➫Design
                        </motion.h2>
                        <p>
                            Expect creativity unleashed. <br/> I'll take your vision and turn it into something that not only looks great but feels right. <br/>Whether it's clean, bold or playful, I make sure your design stands out and speaks to your brand.
                        </p>
                    </div>
                    <div className={styles.word}>
                        <motion.h2
                            variants={slideIn}
                            initial="hidden"
                            whileInView="show">
                            ➫Development
                        </motion.h2>
                        <p>
                            It's all about making things work.<br/> I turn your design into a fully functional, smooth, and responsive website.<br/> From buttons that click pages that load fast, you'll get a site that performs beautifully on any device.
                        </p>
                    </div>
                    <div className={styles.word}>
                        <motion.h2
                            variants={slideIn}
                            initial="hidden"
                            whileInView="show">
                            ➫All-Inclusive
                        </motion.h2>
                        <p>
                            Well, why choose when you can have both?<br/> with my all-inclusive package, you get the best of both worlds; killer design and solid development in one. <br/>It's the full experience, tailored just for you.
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
