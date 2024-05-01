'use client';

import { motion, Variants } from 'framer-motion';
import { textContainer, textVariant2 } from '@/utils/motion';

interface TypingTextProps {
  title: string;
  textStyles?: string;
}

const typingTextVariants: Variants = {
  hidden: {},
  show: textVariant2.show
};

export const TypingText: React.FC<TypingTextProps> = ({ title, textStyles }) => (
  <motion.p
    variants={typingTextVariants}
    initial="hidden"
    whileInView="show"
    className={`font-normal text-[14px] text-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

interface TitleTextProps {
  title: React.ReactNode;
  textStyles?: string;
}

const titleTextVariants: Variants = {
  hidden: {},
  show: textVariant2.show
};

export const TitleText: React.FC<TitleTextProps> = ({ title, textStyles }) => (
  <motion.h2
    variants={titleTextVariants}
    initial="hidden"
    whileInView="show"
    className={`mt-[50px] text-[14px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
