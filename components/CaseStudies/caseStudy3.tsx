'use client';
import Image from "next/image";
import Pic1 from '@/public/images/1.jpg';
import Footer from "@/sections/Footer";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis';

export default function caseStudy1() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Adjust the smooth scroll effect
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <main ref={container} className="relative h-[600vh] w-full overflow-x-hidden"> {/* Ensure full width, hide any horizontal overflow */}
      <Section1 scrollYProgress={scrollYProgress} />
      <Section3 scrollYProgress={scrollYProgress} />
      <Section4 scrollYProgress={scrollYProgress} />
      <Section5 scrollYProgress={scrollYProgress} />
      <Section6 scrollYProgress={scrollYProgress} />
      <Footer />
    </main>
  );
}

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -7]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] w-full"
    >
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw] h-[20vh]"> {/* Ensure Image fills the parent */}
          <Image src={Pic1} alt="img" placeholder="blur" fill className="object-cover" />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  );
};

const Section3: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div style={{ opacity }} className="sticky top-0 h-screen bg-[#1E90FF] flex items-center justify-center text-white w-full">
      <p>Fading In Section 3</p>
    </motion.div>
  );
};

const Section4: React.FC<SectionProps> = ({ scrollYProgress }) => {
  // Adjust the transform range to control the sliding effect, specifically tuned for this section
  const y = useTransform(scrollYProgress, [0.3, 0.5], [-100, 200]); 

  return (
    <motion.div
      style={{ y }}
      className="sticky top-0 h-screen bg-[#FFD700] flex items-center justify-center w-full"
    >
      <p>Sliding Section 4</p>
    </motion.div>
  );
};


const Section5: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#8A2BE2", "#FF6347"]
  );

  return (
    <motion.div style={{ backgroundColor }} className="sticky top-0 h-screen flex items-center justify-center text-white w-full">
      <p>Color Changing Section 5</p>
    </motion.div>
  );
};

const Section6: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 0.5]);

  return (
    <motion.div style={{ scale }} className="sticky top-0 h-screen bg-[#228B22] flex items-center justify-center text-white w-full">
      <p>Scaling Section 6</p>
    </motion.div>
  );
};
