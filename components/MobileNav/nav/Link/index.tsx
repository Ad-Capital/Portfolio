import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../animation';

// Define types for props
interface NavItem {
  title: string;
  href: string;
  index: number;
}

interface LinkProps {
  data: NavItem;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

export default function Index({ data, isActive, setSelectedIndicator }: LinkProps) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className={styles.indicator}
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
