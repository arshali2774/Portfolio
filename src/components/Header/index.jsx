'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../components/RoundedButton/index';
import Magnetic from '../../components/Magnetic/index';

export default function index() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  const mobileBreakpoint = 500;
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isActiveMobile, setIsActiveMobile] = useState(false);
  //   const pathname = usePathname();
  const button = useRef(null);

  //   useEffect(() => {
  //     if (isActive) setIsActive(false);
  //   }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: `${window.innerHeight}`,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out',
          });
        },
        onEnter: () => {
          windowWidth < mobileBreakpoint &&
            gsap.to(button.current, {
              scale: 1,
              duration: 0.25,
              ease: 'power1.out',
            });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: 'power1.out' },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div
        ref={header}
        className={styles.header}
      >
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.dennis}>Arsh</p>
            <p className={styles.snellenberg}>Ali</p>
          </div>
        </div>
        {windowWidth > mobileBreakpoint && (
          <div className={styles.nav}>
            <Magnetic>
              <div className={styles.el}>
                <a
                  href='https://www.linkedin.com/in/arshali2774/'
                  target='_blank'
                  rel='noreferrer'
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  LinkedIn
                </a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
            <Magnetic>
              <div className={styles.el}>
                <a
                  href='https://www.linkedin.com/in/arshali2774/'
                  target='_blank'
                  rel='noreferrer'
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Github
                </a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
            <Magnetic>
              <div className={styles.el}>
                <a
                  href='#contact'
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Contact
                </a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
          </div>
        )}
      </div>
      <div
        ref={button}
        className={styles.headerButtonContainer}
        style={{ transform: isActiveMobile ? 'scale(1)' : 'scale(0)' }}
      >
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ''
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode='wait'>{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
