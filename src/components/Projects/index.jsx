'use client';
import styles from './style.module.scss';
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Rounded from '../../components/RoundedButton/index';

const projects = [
  {
    title: 'Comfy Sloth',
    src: 'comfy.png',
    color: '#000000',
    tech: 'React.js, React Router Dom, Auth0, Stripe',
    link: 'https://comfysloth2023-ecommerce.netlify.app/',
  },
  {
    title: 'Jobster',
    src: 'jobster.png',
    color: '#8C8C8C',
    tech: 'React.js, Redux & Redux Toolkit, React Router Dom',
    link: 'https://jobster11.netlify.app/',
  },
  {
    title: 'MixMaster',
    src: 'Mix.png',
    color: '#EFE8D3',
    tech: 'React.js, React Query, React Router Dom ',
    link: 'https://mix-master-2774.netlify.app/',
  },
  {
    title: 'Old Portfolio',
    src: 'Old.png',
    color: '#706D63',
    tech: 'React.js, Redux & Redux Toolkit, Formik',
    link: 'https://portfolio-2023-coral.vercel.app/',
  },
  {
    title: 'Flash Type',
    src: 'flashtype.png',
    color: '#706D63',
    tech: 'React.js',
    link: 'https://arshali2774.github.io/FlashType/',
  },
  {
    title: 'Name It',
    src: 'nameit.png',
    color: '#706D63',
    tech: 'React.js',
    link: 'https://arshali2774.github.io/NameIt/',
  },
  {
    title: 'Color Generator',
    src: 'colorGen.png',
    color: '#706D63',
    tech: 'React.js',
    link: 'https://calm-klepon-c6cb0b.netlify.app/',
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
      id='projects'
    >
      <Rounded>
        <p>Projects</p>
      </Rounded>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              manageModal={manageModal}
              key={index}
              tech={project.tech}
              link={project.link}
            />
          );
        })}
      </div>

      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial='initial'
          animate={active ? 'enter' : 'closed'}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + '%' }}
            className={styles.modalSlider}
          >
            {projects.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <img
                    src={`/images/${src}`}
                    alt='image'
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial='initial'
          animate={active ? 'enter' : 'closed'}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial='initial'
          animate={active ? 'enter' : 'closed'}
        >
          View
        </motion.div>
      </>
    </main>
  );
}
