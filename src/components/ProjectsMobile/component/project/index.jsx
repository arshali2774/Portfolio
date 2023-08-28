'use client';
import React from 'react';
import styles from './style.module.scss';

export default function index({
  index,
  title,
  manageModal,
  tech,
  link,
  src,
  color,
}) {
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
      <>
        <div className={styles.modalContainer}>
          <div className={styles.modalSlider}>
            <div
              className={styles.modal}
              style={{ backgroundColor: color }}
            >
              <img
                src={`/images/${src}`}
                alt='image'
              />
            </div>
          </div>
        </div>
        <div className={styles.cursor}></div>
        <div className={styles.cursorLabel}>View</div>
      </>
      <h2>{title}</h2>
      <p>{tech}</p>
    </div>
  );
}
