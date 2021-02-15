import React, { useContext } from 'react';
import styles from './Bet.module.scss';

import { AppContext } from '../../AppContext/AppContext';

const Bet = ({ getNewDeck, getCards }) => {

  const { bet, isDealAccepted, setIsDealAccepted, roundNumber, isDeckLoaded } = useContext(AppContext);

  const takeDeal = () => {
    setIsDealAccepted(true);
    if (roundNumber === 1) {
      getNewDeck();
    }
  }

  return (
    <div className={styles.bet}>
      <h2 className={styles.bet__header}>Bet:</h2>
      <div className={styles.bet__token}>
        <p>${bet}</p>
      </div>
      {!isDealAccepted && <button className={styles.bet__deal} onClick={takeDeal}>Deal</button>}
    </div>
  );
}

export default Bet;