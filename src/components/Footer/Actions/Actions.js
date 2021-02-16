import React, { useContext, useEffect } from 'react';
import styles from './Actions.module.scss';

import { AppContext } from '../../AppContext/AppContext';

import { getCards } from '../../Root/getCards';

const Actions = () => {

  const {
    bet, setBet,
    credit, setCredit,
    dealerCards, setDealerCards,
    dealerCardsSum, setDealerCardsSum,
    deck,
    userCards, setUserCards,
    userCardsSum, setUserCardsSum,
    isDoubleDownAvailable,
    setIsDoubleDownAvailable,
    setIsUserTurnFinished,
    winner,
    setWinner,
    isUserTurnFinished } = useContext(AppContext);

  const handleAction = e => {
    if (e.target.name === "Hit") {
      getCards(deck.deck_id, 1, userCards, setUserCards, setUserCardsSum);
      setIsDoubleDownAvailable(false);
    } else if (e.target.name === "Stand") {
      setIsUserTurnFinished(true);
      // dealerTurn();
      while (dealerCardsSum < 17) {
        dealerTurn();
      }
    } else if (e.target.name === "DoubleDown") {
      getCards(deck.deck_id, 1, userCards, setUserCards, setUserCardsSum);
      setBet(bet * 2);
      setCredit(credit - bet);
      setIsUserTurnFinished(true);
      // dealerTurn();
      while (dealerCardsSum < 17) {
        dealerTurn();
      }
    }
    if (isUserTurnFinished) {
      while (dealerCardsSum < 17) {
        dealerTurn();
      }
    }
  }

  useEffect(() => {

    if (userCardsSum > 21) {
      setWinner("dealer");
      console.log('wygrał dealer bo przekroczylem 21')
      setIsUserTurnFinished(true);
    }
    else if (isUserTurnFinished) {
      if (userCardsSum === dealerCardsSum) {
        console.log('remis')
        setWinner("draw");
      } else if (userCardsSum <= 21 && userCardsSum > dealerCardsSum) {
        console.log('wygralem bo mam wiecej ')
        setWinner("user");
      } else {
        console.log('przegralem bo mam mniej')
        setWinner("dealer");
      }
    }

  }, [userCardsSum, dealerCardsSum, setWinner, isUserTurnFinished, setIsUserTurnFinished]);

  const dealerTurn = () => {
    getCards(deck.deck_id, 1, dealerCards, setDealerCards, setDealerCardsSum);
  }

  return (
    <>
      {!isUserTurnFinished && (
        <div className={styles.actionsWrapper}>
          <button
            className={styles.actionsWrapper__action}
            name="Hit"
            onClick={handleAction}>
            Hit
        </button>
          <button
            className={styles.actionsWrapper__action}
            name="Stand" onClick={handleAction}>
            Stand
        </button>
          {(isDoubleDownAvailable && credit >= bet) &&
            <button
              className={styles.actionsWrapper__action}
              name="DoubleDown"
              onClick={handleAction}>
              Double Down
        </button>}
        </div>
      )}
    </>
  );
}

export default Actions;