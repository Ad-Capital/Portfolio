'use client';

import { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import { exploreProjects } from '@/common/index';
import { staggerContainer } from '@/utils/motion';
import { ExploreCard, TitleText, TypingText } from '@/components';
import Rounded from "@/common/RoundedButton"

export default function Index() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  const [active, setActive] = useState<string>('project-2');

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
            title={<>| LATEST PROJECTS</>}
            textStyles=""
          />
          <div className={styles.exploreCards}>
            {exploreProjects.map((project, index) => (
              <ExploreCard
                key={project.id}
                {...project}
                index={index}
                active={active}
                handleClick={setActive}
                url={project.url}
              />
            ))}
          </div>
        </motion.div>
        <div className={styles.buttoncontainer}>
          <a href="/work">
            <Rounded backgroundColor='white'>
              <p>More work <sup>&#8599;</sup></p>
            </Rounded>
          </a>

        </div>

      </section>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}


