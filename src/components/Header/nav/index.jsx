import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';
import { useParams } from 'react-router-dom';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Work',
    href: '#projects',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

export default function index({ setIsActive, isActive }) {
  const pathname = useParams();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                active={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                setIsActive={setIsActive}
                isActive={isActive}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
