import React, { useContext } from 'react';
import styles from './Header.module.scss';

import Settings from './Settings/Settings';
import { AppContext } from '../AppContext/AppContext';

const Header = () => {

  const { roundNumber } = useContext(AppContext);

  return (
    <header className={styles.header}>
      <Settings />
      <p className={`${styles.header__round} ${styles.noSelect}`}>Round {roundNumber}</p>
    </header>
  );
}

export default Header;