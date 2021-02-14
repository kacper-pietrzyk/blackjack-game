import React from 'react';

import styles from './PlayerCards.module.scss';

const PlayerCards = () => {
  return (
    <div className={styles.player}>
      <div className={styles.player__cards}></div>
      <p className={styles.player__cardsValue}>21</p>
    </div>
  );
}

export default PlayerCards;