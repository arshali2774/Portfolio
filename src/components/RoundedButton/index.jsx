import React, { useEffect, useRef } from 'react';
import Magnetic from '../Magnetic';
import styles from './style.module.scss';
import { gsap } from 'gsap';

const Rounded = ({ children, backgroundColor = '#B9837C', ...attributes }) => {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        {
          top: '-25%',
          width: '150%',
          duration: 0.4,
          ease: 'power3.in',
        },
        'enter'
      )
      .to(
        circle.current,
        { top: '-150%', width: '125%', duration: 0.25 },
        'exit'
      );
  }, []);
  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo('enter', 'exit');
  };
  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };
  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: 'hidden' }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          className={styles.circle}
          style={{ backgroundColor }}
          ref={circle}
        ></div>
      </div>
    </Magnetic>
  );
};

export default Rounded;
