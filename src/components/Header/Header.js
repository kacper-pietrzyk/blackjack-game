import React, { useContext } from 'react';
import styles from './Header.module.scss';

import Settings from './Settings/Settings';
import { AppContext } from '../AppContext/AppContext';

const Header = ({ saveGame, loadGame }) => {

  const { roundNumber } = useContext(AppContext);

  return (
    <header className={styles.header}>
      <Settings saveGame={saveGame} loadGame={loadGame} />
      <p className={`${styles.header__round} ${styles.noSelect}`}>Round {roundNumber}</p>
    </header>
  );
}

export default Header;