import React, {
  useState,
} from 'react';

import {
  AiOutlineMenu,
  AiOutlineHeart,
} from 'react-icons/ai';

import {
  FiSearch,
} from 'react-icons/fi';

import {
  RiNotification3Line,
} from 'react-icons/ri';

import {
  MdTagFaces,
} from 'react-icons/md';

import useWindowDimensions from '../../customHooks/useWindowDimensions';

import styles from './navbar.module.css';

export default function Navbar() {
  const [searchStore, setSearchStore] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [activeInput, setActiveInput] = useState(false);
  const {
    width,
  } = useWindowDimensions();

  return (
    <header
      className={styles.navbar}
      style={{
        justifyContent: !activeInput && 'space-between',
      }}
    >
      <div className={styles.navbar__container__left}>
        <button
          className={styles.navbar__button}
          onClick={() => console.info('Menu clicked!')}
        >
          <AiOutlineMenu
            color="#FFFFFF"
            size={22}
          />
        </button>
      </div>
      <div
        className={styles.navbar__container__middle}
        style={{
          width: activeInput ? '90%' : '65%',
        }}
      >
        {(activeInput || width >= 768) && (
          <>
            <input
              value={searchStore}
              onChange={(e) => setSearchStore(e.target.value)}
              placeholder="Busca un comercio..."
              autoFocus
              className={`${styles.input} ${styles['input--borderleft']}`}
              onFocus={() => width < 768 && setActiveInput(true)}
              onBlur={() => width < 768 && setActiveInput(false)}
            />
            <input
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              placeholder="Ingresa una ubicación..."
              className={`${styles.input} ${styles['input--borderright']}`}
            />
          </>
        )}
        {!activeInput && (
          <button
            className={`${styles.navbar__button} ${styles['button--search']}`}
            onClick={() => width < 768 && setActiveInput(true)}
          >
            <FiSearch
              color="#FFFFFF"
              size={14}
            />
          </button>
        )}
      </div>
      {((width < 768 && activeInput === false) || width >= 768) && (
        <div className={styles.navbar__container__right}>
          <button
            className={styles.navbar__button}
            onClick={() => console.info('Notification clicked!')}
          >
            <RiNotification3Line
              color="#FFFFFF"
              size={22}
            />
          </button>
          <button
            className={styles.navbar__button}
            onClick={() => console.info('Favorites clicked!')}
          >
            <AiOutlineHeart
              color="#FFFFFF"
              size={22}
            />
          </button>
          <button
            className={styles.navbar__button}
            onClick={() => console.info('Avatar clicked!')}
          >
            <MdTagFaces
              color="#FFCA3A"
              size={22}
            />
          </button>
        </div>
      )}
    </header>
  );
}
