import styles from './styles.module.scss';
import Picture1 from '@/public/images/1.png';
import Picture2 from '@/public/images/2.png';
import Picture3 from '@/public/images/3.png';
import Picture4 from '@/public/images/4.png';
import Picture5 from '@/public/images/5.png';
import Picture6 from '@/public/images/6.jpg';
import Picture7 from '@/public/images/7.jpg';
import { LottieAnimation } from '@/components';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale4
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale5
        },
        {
            src: Picture5,
            scale: scale6
        }
    ];

    return (
        <section>
            <div ref={container} className={styles.container}>
                <div className={styles.sticky}>
                    <div className={styles.animation}>
                        <LottieAnimation />
                    </div>
                    {pictures.map(({ src, scale }, index) => (
                        <motion.div key={index} style={{ scale }} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={src}
                                    alt="image"
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>

    );
}
