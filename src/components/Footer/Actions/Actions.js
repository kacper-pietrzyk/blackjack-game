import React, { useContext } from 'react';
import styles from './Actions.module.scss';

import { AppContext } from '../../AppContext/AppContext';
import { getCards } from '../../Root/getCards';
import { getPlayerCardsSum } from '../../Root/getPlayerCardsSum';

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

  let userIsDone = isUserTurnFinished;

  const dealerTurn = async (userSum) => {
    let dealerSum = dealerCardsSum;
    const allDealerCards = dealerCards;

    if (userSum > 21) {
      const newDealerCard = await getCards(deck.deck_id, 1);
      allDealerCards.push(...newDealerCard);
      setDealerCards(allDealerCards);
      dealerSum = getPlayerCardsSum(allDealerCards)
      setDealerCardsSum(dealerSum);
    } else {

      while (dealerSum < 17) {
        const newDealerCard = await getCards(deck.deck_id, 1);
        allDealerCards.push(...newDealerCard);
        setDealerCards(allDealerCards);
        dealerSum = getPlayerCardsSum(allDealerCards)
        setDealerCardsSum(dealerSum);
      }
    }
    return dealerSum;
  }

  const userTurn = async (e) => {
    if (e.target.name === "Hit") {
      const newUserCard = await getCards(deck.deck_id, 1);
      setUserCards([...userCards, ...newUserCard]);
      const userSum = getPlayerCardsSum([...userCards, ...newUserCard]);
      setUserCardsSum(userSum);
      setIsDoubleDownAvailable(false);
      return userSum;

    } else if (e.target.name === "Stand") {
      setIsUserTurnFinished(true);
      userIsDone = true;
      const userSum = userCardsSum;
      return userSum;

    } else if (e.target.name === "DoubleDown") {
      const newUserCard = await getCards(deck.deck_id, 1);
      setUserCards([...userCards, ...newUserCard]);
      const userSum = getPlayerCardsSum([...userCards, ...newUserCard]);
      setUserCardsSum(userSum);
      setBet(bet * 2);
      setCredit(credit - bet);
      setIsUserTurnFinished(true);
      userIsDone = true;
      return userSum;
    }
  }

  const handleAction = async e => {
    const userSum = await userTurn(e);

    let dealerSum;
    if (userSum > 21 || e.target.name === "Stand" || e.target.name === "DoubleDown") {
      dealerSum = await dealerTurn(userSum);
    }

    if (userSum > 21) {
      setWinner("dealer");
      setIsUserTurnFinished(true);
      userIsDone = true;
    }
    else if (userIsDone) {
      if (userSum === dealerSum) {
        setWinner("draw");

      } else if (userSum > dealerSum || dealerSum > 21) {
        setWinner("user");

      } else {
        setWinner("dealer");
      }
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
            name="Stand"
            onClick={handleAction}>
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