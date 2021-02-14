import React, { useContext } from 'react';
import styles from './DealerCards.module.scss';

import { AppContext } from '../AppContext/AppContext';

const DealerCards = () => {

  const { dealerSum } = useContext(AppContext);

  return (
    <div className={styles.dealer}>
      <div className={styles.dealer__cards}></div>
      {dealerSum > 0 && <p className={styles.dealer__cardsValue}>{dealerSum}</p>}
    </div>
  );
}

export default DealerCards;