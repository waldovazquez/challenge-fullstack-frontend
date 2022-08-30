import React from 'react';

import styles from './cardpromotion.module.css';

function CardPromotion({
  name,
  image,
  url,
}) {
  return (
    <div className={styles.cardpromotion}>
      <div className={styles.cardpromotion__container__image}>
        <img
          src={image}
          alt={name}
          className={styles.cardpromotion__container__image__image}
        />
      </div>
      <div className={styles.cardpromotion__container__name}>
        <p className={styles.cardpromotion__container__name__name}>
          {
            name.length > 16 ? `${name.slice(0, 16)}...` : name
          }
        </p>
      </div>
      <a
        target="_blank"
        href={url}
        rel="noreferrer"
        className={styles.cardpromotion__container__button}
      >
        <button className={styles.cardpromotion__button}>Quiero mi código</button>
      </a>
    </div>
  );
}

export default CardPromotion;
