import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

const Index: React.FC = () => {
  const [initialPath, setInitialPath] = useState<string>('M100 0 L200 0 L200 896 L100 896 Q100 448 100 0');
  const [targetPath, setTargetPath] = useState<string>('M100 0 L200 0 L200 896 L100 896 Q100 448 100 0');
  

  useEffect(() => {
    const calculatePaths = () => {
      const windowHeight = window.innerHeight;
      const initialPathValue = `M100 0 L200 0 L200 ${windowHeight} L100 ${windowHeight} Q-100 ${windowHeight / 2} 100 0`;
      const targetPathValue = `M100 0 L200 0 L200 ${windowHeight} L100 ${windowHeight} Q100 ${windowHeight / 2} 100 0`;
      setInitialPath(initialPathValue);
      setTargetPath(targetPathValue);
    };

    calculatePaths();

    const handleResize = () => {
      calculatePaths();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  );
};

export default Index;