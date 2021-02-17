import React, { useContext } from 'react';
import styles from './Main.module.scss';

import BackgroundText from './BackgroundText/BackgroundText';
import Bet from './Bet/Bet';
import PlayerCards from './PlayerCards/PlayerCards';
import ResultMessage from './ResultMessage/ResultMessage';

import { AppContext } from '../AppContext/AppContext';
import { getCards } from '../Root/getCards';

const Main = () => {

  const {
    bet, setBet,
    setDeck,
    dealerCards, setDealerCards,
    setIsDealAccepted,
    winner,
    userCards, setUserCards,
    userCardsSum, setUserCardsSum,
    setIsUserTurnFinished,
    setIsDoubleDownAvailable,
    setWinner,
    setCredit, credit,
    setRoundNumber, roundNumber,
    dealerCardsSum, setDealerCardsSum } = useContext(AppContext);

  const getNewDeck = () => {
    const newShuffledCardsUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6';
    fetch(newShuffledCardsUrl)
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
        throw Error(response.statusText);
      })
      .then(result => {
        setDeck(result);
        getInitialCards(result.deck_id)
      })
      .catch(err => console.log(`${err}: Failed to get cards from API`));
  };

  const getInitialCards = deckId => {
    // get user cards
    getCards(deckId, 2, userCards, setUserCards, setUserCardsSum);
    // get dealer card
    getCards(deckId, 1, dealerCards, setDealerCards, setDealerCardsSum);
  }

  const handleNextRound = () => {
    setCredit(credit + 1.5 * bet)
    setBet(0);
    setDealerCards(null);
    setDealerCardsSum(0);
    setIsDealAccepted(false);
    setIsDoubleDownAvailable(true);
    setIsUserTurnFinished(false);
    setWinner('');
    setRoundNumber(roundNumber + 1);
    setUserCards(null);
    setUserCardsSum(0);
  }

  return (
    <main className={styles.main}>
      {dealerCards &&
        <PlayerCards
          cards={dealerCards}
          playerCardsSum={dealerCardsSum}
        />}
      <BackgroundText />
      {winner === "dealer" &&
        <ResultMessage
          winner="dealer"
          click={handleNextRound}
        />}
      {winner === "user" &&
        <ResultMessage
          winner="user"
          click={handleNextRound}
        />}
      {winner === "draw" &&
        <ResultMessage
          winner="draw"
          click={handleNextRound}
        />}
      {userCards &&
        <PlayerCards
          cards={userCards}
          playerCardsSum={userCardsSum}
        />}
      {bet !== 0 &&
        <Bet
          getNewDeck={getNewDeck}
        />}
    </main>
  );
}

export default Main;