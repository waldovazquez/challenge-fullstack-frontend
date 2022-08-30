import React from 'react';

import {
  FaChevronRight,
  FaChevronLeft,
} from 'react-icons/fa';

import CardLocation from '../../CardLocation';
import CardPromotion from '../../CardPromotion';

import styles from './second.module.css';

export default function SecondaryCarousel({
  firstCarousel = false,
  data = [],
}) {
  return (
    <div className={styles.secondarycarousel}>
      <button
        className={styles.secondarycarousel__button}
        onClick={() => console.info('Left Button Clicked!')}
      >
        <FaChevronLeft
          size={22}
        />
      </button>
      <div className={styles.secondarycarousel__container__images}>
        {
          data.map((item) => (
            <div key={item.id}>
              {firstCarousel ? (
                <CardLocation
                  name={item.name}
                  image={item.images[0].url}
                  url={`https://club.lanacion.com.ar/${item.crmid}`}
                  value={item.benefits}
                  distance={item.branches[0].location}
                />
              ) : (
                <CardPromotion
                  name={item.name}
                  image={item.images[0].url}
                  url={`https://club.lanacion.com.ar/${item.crmid}`}
                />
              )}
            </div>
          ))
        }
      </div>
      <button
        className={styles.secondarycarousel__button}
        onClick={() => console.info('Right Button Clicked!')}
      >
        <FaChevronRight
          size={22}
        />
      </button>
    </div>
  );
}
