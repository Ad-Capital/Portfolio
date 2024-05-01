'use client';

import { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import { exploreWorlds } from '@/common/index';
import { staggerContainer } from '@/utils/motion';
import { ExploreCard, TitleText, TypingText } from '@/components';

export default function Index() {

    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    const [active, setActive] = useState<string>('world-2');


    return (
        <div ref={container} className={styles.slidingImages}>
            <section id="explore">
                <motion.div
                    variants={staggerContainer(0.1, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={styles.explore}
                >
                    <TitleText
                        title={<>LATEST PROJECTS</>}
                        textStyles=""
                    />
                    <div className={styles.exploreCards}>
                        {exploreWorlds.map((world, index) => (
                            <ExploreCard
                                key={world.id}
                                {...world}
                                index={index}
                                active={active}
                                handleClick={setActive}
                            />
                        ))}
                    </div>
                </motion.div>
            </section>
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    )
}

