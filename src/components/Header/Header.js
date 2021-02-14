import React from 'react';

import styles from './Header.module.scss';

import Settings from '../Settings/Settings';

const Header = () => {
  return (
    <header className={styles.header}>
      <Settings />
      <p className={`${styles.header__round} ${styles.noSelect}`}>Round 2</p>
    </header>
  );
}

export default Header;