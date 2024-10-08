'use client';
import styles from './style.module.scss';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { Footer } from '@/components';

interface FooterVariant {
    [key: string]: any;
}

export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <div className={styles.subbody}>
                        <div className='flex flex-col'>
                            <span>
                                <img src="sandman.jpg" alt="" className='object-contain' />
                            </span>
                        </div>
                        <div className={styles.text}>
                            <motion.div>
                                <h1 className={styles.contactText}>
                                    Pioneering the Future of Digital Design and Development.
                                </h1>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}