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
    isDoubleDownAvailable,
    isUserTurnFinished,
    setIsDoubleDownAvailable,
    setIsUserTurnFinished,
    setWinner,
    userCards, setUserCards,
    userCardsSum, setUserCardsSum } = useContext(AppContext);

  const handleAction = e => {
    if (e.target.name === "Hit") {
      getCards(deck.deck_id, 1, userCards, setUserCards, setUserCardsSum);
      setIsDoubleDownAvailable(false);
    } else if (e.target.name === "Stand") {
      setIsUserTurnFinished(true);
      if (dealerCardsSum < 17) {
        dealerTurn();
      }
    } else if (e.target.name === "DoubleDown") {
      getCards(deck.deck_id, 1, userCards, setUserCards, setUserCardsSum);
      setBet(bet * 2);
      setCredit(credit - bet);
      setIsUserTurnFinished(true);
      if (dealerCardsSum < 17) {
        dealerTurn();
      }
    }
    if (isUserTurnFinished && dealerCardsSum < 17) {
      dealerTurn();
    }
  }

  useEffect(() => {

    if (userCardsSum > 21) {
      setWinner("dealer");
      setIsUserTurnFinished(true);
    }
    else if (isUserTurnFinished) {
      if (userCardsSum === dealerCardsSum) {
        setWinner("draw");
      } else if (userCardsSum <= 21 && userCardsSum > dealerCardsSum) {
        setWinner("user");
      } else {
        setWinner("dealer");
      }
    }

  }, [dealerCardsSum, isUserTurnFinished, setIsUserTurnFinished, setWinner, userCardsSum]);

  const dealerTurn = () => {
    if (dealerCardsSum < 17) {
      getCards(deck.deck_id, 1, dealerCards, setDealerCards, setDealerCardsSum);
    }
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
          {(isDoubleDownAvailable && (credit >= bet)) &&
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