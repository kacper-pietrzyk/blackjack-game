import React, { useContext } from 'react';
import styles from './Bet.module.scss';

import { AppContext } from '../AppContext/AppContext';

const Bet = () => {

  const { bet } = useContext(AppContext);

  return (
    <div className={styles.bet}>
      <div className={styles.bet__token}>
        <p>${bet}</p>
      </div>
      <button className={styles.bet__deal}>Deal</button>
    </div>
  );
}

export default Bet;