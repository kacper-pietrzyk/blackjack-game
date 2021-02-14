import React from 'react';

import styles from './Bet.module.scss';

const Bet = () => {
  return (
    <div className={styles.betWrapper}>
      <div className={styles.bet}>
        <div className={styles.bet__token}>
          <p>$$</p>
        </div>
        <p className={styles.bet__value}>$200</p>
      </div>
      <p className={styles.bet__deal}>Deal</p>
    </div>
  );
}

export default Bet;