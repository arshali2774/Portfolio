import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../components/RoundedButton/index';
export default function index() {
  const phrase =
    ' An imaginative frontend developer, adept at turning designs into captivating online experiences. With a flair for animation, I bring websites to life, adding that touch of magic that keeps visitors spellbound.';
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div
      ref={description}
      className={styles.description}
      id='about'
    >
      <div className={styles.body}>
        <p>
          {phrase.split(' ').map((word, index) => {
            return (
              <span
                key={index}
                className={styles.mask}
              >
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? 'open' : 'closed'}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          variants={opacity}
          animate={isInView ? 'open' : 'closed'}
        >
          Enthusiastically dedicated to crafting web UIs, I find joy in coding
          and animating, infusing each project with creativity and innovation.
        </motion.p>
        <div
          data-scroll
          data-scroll-speed={0.1}
        >
          <Rounded className={styles.button}>
            <p>About me</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
