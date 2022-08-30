import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import SecondaryCarousel from '../Carousel/Secondary';

import styles from './cardcarousel.module.css';

export default function CardCarousel({
  title,
  buttonContent,
  tourism = false,
  description = null,
  url,
}) {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(url);
      if (response) {
        setData(response.data);
      }
    } catch (error) {
      console.info('Error', error);
    }
  }

  useEffect(() => {
    if (url) {
      getData();
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: tourism ? '#FFFFFF' : '#F8F9FA',
      }}
      className={styles.cardcarousel}
    >
      <div className={styles.cardcarousel__info}>
        <div className={styles.cardcarousel__title}>
          <h1 className={styles.cardcarousel__title__title}>{title}</h1>
          <button className={styles.cardcarousel__title__button}>{buttonContent}</button>
        </div>
        {description && <h3 className={styles.cardcarousel__description}>{description}</h3>}
      </div>
      <SecondaryCarousel
        data={data}
        firstCarousel={tourism}
      />
    </div>
  );
}
