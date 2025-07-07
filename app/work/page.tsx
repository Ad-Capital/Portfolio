'use client';

import Rounded from "@/common/RoundedButton";
import Workloader from "./Workloader"
import { useRef, useState, useEffect } from "react";
import styles from './page.module.scss';
import { designProjects, developmentProjects, Project } from '@/common/projectsData';
import Magnetic from "@/common/Magnetic";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Footer from "@/sections/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  const [activeSection, setActiveSection] = useState<'design' | 'development'>('design');
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  const handleNavClick = (section: 'design' | 'development') => {
    if (section !== activeSection) setActiveSection(section);
  };

  const renderProject = (project: Project, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={styles.projectCard}
    >
      <div className={styles.images}>
        {project.src.map((src, i) => (
          <motion.div
            key={`img_${index}_${i}`}
            style={{ y: i === 0 ? sm : i === 1 ? md : lg }}
            className={styles.imageContainer}
          >
            <Image
              src={src}
              alt={`${project.title} image ${i + 1}`}
              className="rounded-xl"
              placeholder="blur"
            />
          </motion.div>
        ))}
      </div>
      <div className={styles.el}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
      </div>
      <Link href={project.href} className={styles.link}>
        <Rounded backgroundColor="white">
          <p>Live Site</p>
        </Rounded>
      </Link>
    </motion.div>
  );

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Workloader key="preloader" />}
      </AnimatePresence>
      <div className={styles.container} ref={container}>
        <div className={styles.body}>
          <nav className={styles.nav}>
            <Magnetic>
              <button
                className={`${styles.el} ${activeSection === 'design' ? styles.active : ''}`}
                onClick={() => handleNavClick('design')}
                aria-pressed={activeSection === 'design'}
              >
                <span>Selected Works</span>
                <div className={styles.indicator}></div>
              </button>
            </Magnetic>
            {/* <Magnetic>
              <button
                className={`${styles.el} ${activeSection === 'development' ? styles.active : ''}`}
                onClick={() => handleNavClick('development')}
                aria-pressed={activeSection === 'development'}
              >
                <span>Development</span>
                <div className={styles.indicator}></div>
              </button>
            </Magnetic> */}
          </nav>
        </div>

        <div className={styles.content}>
          <AnimatePresence mode="wait">
            {activeSection === 'design' && (
              <motion.div
                key="design"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className={styles.section}
              >
                {/* <h2>Design it. Code it. Ship it. Repeat.</h2> */}
                {/* <p>Here are some of my design projects...</p> */}
                <div>
                  {designProjects.map((project, index) => renderProject(project, index))}
                </div>
              </motion.div>
            )}
            {activeSection === 'development' && (
              <motion.div
                key="development"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className={styles.section}
              >
                {/* <h2>Design it. Code it. Ship it. Repeat.</h2> */}
                {/* <p>Here are some of my development projects...</p> */}
                <div className={styles.projectColumn}>
                  {developmentProjects.map((project, index) => renderProject(project, index))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
      <Footer />

    </main>

  );
};

export default Index;
