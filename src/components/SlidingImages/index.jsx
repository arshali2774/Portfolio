import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';

const slider1 = [
  {
    color: '#e3e5e7',
    src: 'colorGen.png',
  },
  {
    color: '#d6d7dc',
    src: 'comfy.png',
  },
  {
    color: '#e3e3e3',
    src: 'flashtype.png',
  },
  {
    color: '#21242b',
    src: 'comfy2.png',
  },
  {
    color: '#21242b',
    src: 'jobster.png',
  },
  {
    color: '#21242b',
    src: 'comfy3.png',
  },
  {
    color: '#21242b',
    src: 'jobster2.png',
  },
  {
    color: '#21242b',
    src: 'comfy4.png',
  },
  {
    color: '#21242b',
    src: 'jobster3.png',
  },
];

const slider2 = [
  {
    color: '#d4e3ec',
    src: 'comfy5.png',
  },
  {
    color: '#e5e0e1',
    src: 'Mix.png',
  },
  {
    color: '#d7d4cf',
    src: 'comfy6.png',
  },
  {
    color: '#e1dad6',
    src: 'Mix2.png',
  },
  {
    color: '#d7d4cf',
    src: 'comfy7.png',
  },
  {
    color: '#e1dad6',
    src: 'Old3.png',
  },
  {
    color: '#d7d4cf',
    src: 'nameIt2.png',
  },
  {
    color: '#e1dad6',
    src: 'Old.png',
  },
  {
    color: '#e1dad6',
    src: 'Old2.png',
  },
];

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={container}
      className={styles.slidingImages}
    >
      <motion.div
        style={{ x: x1 }}
        className={styles.slider}
      >
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <img
                  //   fill={true}
                  alt={'image'}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className={styles.slider}
      >
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div
                key={index}
                className={styles.imageContainer}
              >
                <img
                  //   fill={true}
                  alt={'image'}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ height }}
        className={styles.circleContainer}
      >
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
