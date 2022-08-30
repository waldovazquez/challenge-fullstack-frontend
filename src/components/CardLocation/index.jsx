import React from 'react';

import {
  GoLocation,
} from 'react-icons/go';

import styles from './cardlocation.module.css';

function CardLocation({
  name,
  image,
  url,
  value = [],
  distance,
}) {
  function getStyles(position) {
    if (position === 1) {
      return styles.cardlocation__discounts__value1;
    }
    if (position === 2) {
      return styles.cardlocation__discounts__value2;
    }
    return styles.cardlocation__discounts__value;
  }

  return (
    <div className={styles.cardlocation}>
      <a
        target="_blank"
        href={url}
        rel="noreferrer"
        className={styles.cardlocation__container__image}
      >
        <img
          src={image}
          alt={name}
          className={styles.cardlocation__container__image__image}
        />
      </a>
      <div className={styles.cardlocation__container__name}>
        <a
          target="_blank"
          href={url}
          rel="noreferrer"
          className={styles.cardlocation__container__name__name}
        >
          {name.length > 16 ? `${name.slice(0, 16)}...` : name}
        </a>
      </div>
      <div className={styles.cardlocation__discounts}>
        {
          value.map((item, index) => (
            <div
              style={{
                display: 'flex',
              }}
              key={Math.floor(Math.random() * Date.now())}
            >
              {index > 0 && (
                <div
                  style={{
                    width: '2px',
                    height: '18px',
                    background: '#69696950',
                    margin: '0px 6px',
                  }}
                />
              )}
              <p className={getStyles(index)}>
                {item.type}
              </p>
            </div>
          ))
        }
      </div>
      <div className={styles.cardlocation__location}>
        <GoLocation
          size={14}
          color="#696969"
        />
        <span style={{
          display: 'flex',
          color: '#696969',
          marginLeft: '2px',
        }}
        >
          A
          <p style={{
            margin: '0px 2px 0px 2px',
            fontWeight: '600',
          }}
          >{String(distance * 0.001).slice(0, 4)} km
          </p>
        </span>
      </div>
    </div>
  );
}

export default CardLocation;
