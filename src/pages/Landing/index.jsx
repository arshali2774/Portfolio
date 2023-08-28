'use client';
import styles from './style.module.scss';
import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import Desc from '../../components/Description/index';
import Projects from '../../components/Projects/index';
import Sliding from '../../components/SlidingImages/index';
import Contact from '../../components/Contact/';
import MobileContact from '../../components/MobileContact';
import ProjectsMobile from '../../components/ProjectsMobile/index';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  const mobileBreakpoint = 500;
  console.log(windowWidth < mobileBreakpoint);
  console.log(windowWidth);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-5px',
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.05 * direction;
  };

  return (
    <>
      <motion.main
        variants={slideUp}
        initial='initial'
        animate='enter'
        className={styles.landing}
      >
        <div className={styles.mastboard}>
          <img
            src='images/Arsh.png'
            alt='dennis'
          />
        </div>

        <div className={styles.sliderContainer}>
          <div
            ref={slider}
            className={styles.slider}
          >
            <p ref={firstText}>Frontend Developer -</p>
            <p ref={secondText}>Frontend Developer -</p>
          </div>
        </div>
        <div
          data-scroll
          data-scroll-speed={0.1}
          className={styles.description}
        >
          <svg
            width='9'
            height='9'
            viewBox='0 0 9 9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z'
              fill='white'
            />
          </svg>
          <p>Frontend</p>
          <p> Developer</p>
        </div>
      </motion.main>
      <Desc />
      {windowWidth < mobileBreakpoint ? <ProjectsMobile /> : <Projects />}

      {windowWidth > mobileBreakpoint && <Sliding />}
      {windowWidth < mobileBreakpoint ? <MobileContact /> : <Contact />}
    </>
  );
}
