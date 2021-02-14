import React from 'react';

import styles from './DealerCards.module.scss';

const DealerCards = () => {
  return (
    <div className={styles.dealer}>
      <div className={styles.dealer__cards}></div>
      <p className={styles.dealer__cardsValue}>17</p>
    </div>
  );
}

export default DealerCards;