import React, { useContext } from 'react';
import styles from './Bet.module.scss';

import { AppContext } from '../../AppContext/AppContext';

const Bet = ({ getNewDeck }) => {

  const {
    bet,
    isDealAccepted,
    roundNumber,
    setIsDealAccepted } = useContext(AppContext);

  const handleDeal = () => {
    setIsDealAccepted(true);
    if (roundNumber === 1) {
      getNewDeck();
    }
  }

  return (
    <div className={styles.bet}>
      {!isDealAccepted && <button className={styles.bet__deal} onClick={handleDeal}>Deal</button>}
      <div className={styles.bet__tokenWrapper}>
        <h2 className={styles.bet__header}>Bet</h2>
        <div className={styles.bet__token}>
          <p>${bet}</p>
        </div>

      </div>
    </div>
  );
}

export default Bet;