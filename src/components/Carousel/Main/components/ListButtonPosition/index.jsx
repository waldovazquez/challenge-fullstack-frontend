import React from 'react';

import styles from './listbuttonposition.module.css';

export default function ListButtonPosition({
  setCurrentSlide = () => { },
  currentSlide,
}) {
  function getButtonStyles(position) {
    if (Number(position) === currentSlide) return `${styles.maincarousel__circle} ${styles['slide--active']}`;
    return `${styles.maincarousel__circle} ${styles['slide--inactive']}`;
  }

  return (
    <ul className={styles.maincarousel__positions}>
      <button
        onClick={() => setCurrentSlide(0)}
        className={styles.maincarousel__button}
      >
        <li className={getButtonStyles(0)} />
      </button>
      <button
        onClick={() => setCurrentSlide(1)}
        className={styles.maincarousel__button}
      >
        <li className={getButtonStyles(1)} />
      </button>
      <button
        onClick={() => setCurrentSlide(2)}
        className={styles.maincarousel__button}
      >
        <li className={getButtonStyles(2)} />
      </button>
      <button
        onClick={() => setCurrentSlide(3)}
        className={styles.maincarousel__button}
      >
        <li className={getButtonStyles(3)} />
      </button>
    </ul>
  );
}
