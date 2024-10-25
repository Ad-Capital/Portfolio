'use client';
import styles from './style.module.scss';
import Rounded from "@/common/RoundedButton"
import Magnetic from "@/common/Magnetic"
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {

  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Ensure elements are available before animating
    if (slider.current && firstText.current && secondText.current) {
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e: any) => direction = e.direction * -1
        },
        x: "-500px",
      });
      
      requestAnimationFrame(animate);
    }
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    // Ensure elements are not null before setting GSAP properties
    if (firstText.current && secondText.current) {
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
    }

    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Get in touch -</p>
          <p ref={secondText}>Get in touch -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <p>Pioneering the Future of Digital Design and Development.</p>
      </div>
      <div className={styles.el}>
        <div className={styles.container}>
          <div className={styles.column}>
            <Link href="/contact">
              <div className={styles.button}>
                <Rounded backgroundColor={"white"}>
                  <p className='text-white'>Get In Touch</p>
                </Rounded>
              </div>
            </Link>
            <div className={styles.line} />
            <div className={styles.copyright}>
              <h4>
                Ona Adrian
              </h4>
              <p>
                Copyright © 2019 - 2024. All rights reserved.
              </p>
              <span>
                <div className={styles.socials}>
                  <span>
                    <Magnetic>
                      <a href="https://wa.me/+2349029458058"><img src="whatsapp.svg" alt="whatsapp" /></a>
                    </Magnetic>
                  </span>
                  <span>
                    <Magnetic>
                      <a href="mailto:isaacona2@gmail.com"><img src="email.png" alt="email" /></a>
                    </Magnetic>
                  </span>
                  {/* <span>
                    <Magnetic>
                      <a href="linkedin.com/in/ona-isaac"><img src="linkedin.svg" alt="" /></a>
                    </Magnetic>
                  </span>
                  <span>
                    <Magnetic>
                      <a href="https://x.com/TraderAD_"><img src="twitter.svg" alt="" /></a>
                    </Magnetic>
                  </span> */}
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
