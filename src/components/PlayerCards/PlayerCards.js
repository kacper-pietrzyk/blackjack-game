import React, { useContext } from 'react';
import styles from './PlayerCards.module.scss';

import { AppContext } from '../AppContext/AppContext';

const PlayerCards = () => {

  const { playerSum } = useContext(AppContext);

  return (
    <div className={styles.player}>
      <div className={styles.player__cards}></div>
      {playerSum > 0 && <p className={styles.player__cardsValue}>{playerSum}</p>}
    </div>
  );
}

export default PlayerCards;