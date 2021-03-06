import React, { useContext } from 'react';
import styles from './Footer.module.scss';

import Actions from './Actions/Actions.jsx';
import Stats from './Stats/Stats.jsx';
import Tokens from './Tokens/Tokens.jsx';

import { AppContext } from '../AppContext/AppContext';

const Footer = () => {

  const {
    credit,
    isDealAccepted } = useContext(AppContext);

  return (
    <footer className={`${styles.footer} ${styles.noSelect}`}>
      <Stats />
      {!isDealAccepted && <Tokens />}
      {isDealAccepted && <Actions />}
      <p className={styles.footer__credit}>Credit: ${credit}</p>
    </footer>
  );
}

export default Footer;