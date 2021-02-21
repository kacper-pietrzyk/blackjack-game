import React, { useContext } from 'react';
import styles from './Bet.module.scss';

import { AppContext } from '../../AppContext/AppContext';

const Bet = ({ startNewDeal }) => {

  const {
    bet, setBet,
    credit, setCredit,
    isDealAccepted,
    setIsDealAccepted } = useContext(AppContext);

  const handleDeal = () => {
    setIsDealAccepted(true);
    startNewDeal();
  }

  const cancelBet = () => {
    setBet(0);
    setCredit(credit + bet)
  }

  return (
    <div className={styles.bet}>
      {!isDealAccepted &&
        <button
          className={styles.bet__deal}
          onClick={handleDeal}>
          Deal
        </button>}
      <div className={styles.bet__tokenWrapper}>
        <h2 className={styles.bet__header}>Bet</h2>
        <div className={styles.bet__token}>
          <p>${bet}</p>
        </div>
        {!isDealAccepted &&
          <button
            className={styles.bet__cancel}
            onClick={cancelBet}>
            Cancel bet
        </button>}
      </div>
    </div>
  );
}

export default Bet;