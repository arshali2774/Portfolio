'use client';
import React from 'react';
import styles from './style.module.scss';

export default function index({ index, title, manageModal, tech, link }) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
      onClick={() => window.open(link, '_blank')}
    >
      <h2>{title}</h2>
      <p>{tech}</p>
    </div>
  );
}
