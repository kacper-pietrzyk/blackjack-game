import React, { useContext } from 'react';
import styles from './Footer.module.scss';

import Actions from './Actions/Actions';
import Stats from './Stats/Stats';
import Tokens from './Tokens/Tokens';

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
      <p>Credit: ${credit}</p>
    </footer>
  );
}

export default Footer;