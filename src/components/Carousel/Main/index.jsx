import React, {
  useState,
} from 'react';

import {
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

import ListButtonPosition from './components/ListButtonPosition';

import styles from './main.module.css';

export default function Main({
  data,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  function handleCurrentSlide(position = '') {
    if (position.toLowerCase() === 'left') {
      if (currentSlide === 0) {
        return null;
      }
      setCurrentSlide((oldSlide) => oldSlide -= 1);
    }
    if (position.toLowerCase() === 'right') {
      if (currentSlide === 3) {
        return null;
      }
      setCurrentSlide((oldSlide) => oldSlide += 1);
    }
    return null;
  }

  return (
    <div className={styles.maincarousel}>
      <div className={`${styles.maincarousel__container__button} ${styles['container--left']}`}>
        <button
          className={`${styles.maincarousel__button} ${styles['button--left']}`}
          onClick={() => handleCurrentSlide('left')}
        >
          <FaChevronLeft
            color="#FFFFFF"
            size={20}
          />
        </button>
      </div>
      <div className={styles.maincarousel__slides}>
        {data.length > 0 && (
          <img
            src={data[currentSlide].images[0].url}
            alt={data[currentSlide].name}
            className={styles.maincarousel__slides__image}
          />
        )}
      </div>
      <div className={`${styles.maincarousel__container__button} ${styles['container--right']}`}>
        <button
          className={`${styles.maincarousel__button} ${styles['button--right']}`}
          onClick={() => handleCurrentSlide('right')}
        >
          <FaChevronRight
            color="#FFFFFF"
            size={20}
          />
        </button>
      </div>
      <ListButtonPosition
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
}
