import React, { useContext } from 'react';
import styles from './Main.module.scss';

import BackgroundText from './BackgroundText/BackgroundText';
import Bet from './Bet/Bet';
import PlayerCards from './PlayerCards/PlayerCards';
import ResultMessage from './ResultMessage/ResultMessage';

import { AppContext } from '../AppContext/AppContext';
import { getCards } from '../Root/getCards';
import { resetGame } from './resetGame';

const Main = () => {

  const {
    bet, setBet,
    deck, setDeck,
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
    if (roundNumber === 1) {
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
    } else {
      getInitialCards(deck.deck_id)
    }
  };

  const getInitialCards = deckId => {
    // get user cards
    getCards(deckId, 2, userCards, setUserCards, setUserCardsSum);
    // get dealer card
    getCards(deckId, 1, dealerCards, setDealerCards, setDealerCardsSum);
  }

  const handleNextRound = () => {
    if (winner === "user") {
      setCredit(credit + 1.5 * bet)
    } else if (winner === "draw") {
      setCredit(credit + bet);
    }
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

  const handleNewGame = () => {

    resetGame(
      setCredit,
      setBet,
      setDealerCards,
      setDealerCardsSum,
      setDeck,
      setIsDealAccepted,
      setIsDoubleDownAvailable,
      setIsUserTurnFinished,
      setWinner,
      setRoundNumber,
      setUserCards,
      setUserCardsSum
    )
  }

  return (
    <main className={styles.main}>
      {dealerCards &&
        <PlayerCards
          cards={dealerCards}
          playerCardsSum={dealerCardsSum}
        />}
      <BackgroundText />
      {((credit === 0 && winner === "dealer") || (roundNumber === 5 && winner)) &&
        <ResultMessage
          credit={credit}
          click={handleNewGame}
          roundNumber={roundNumber}
        />}
      {(winner === "dealer" && roundNumber < 5 && credit >= 5) &&
        <ResultMessage
          winner="dealer"
          click={handleNextRound}
        />}
      {(winner === "user" && roundNumber < 5 && credit >= 5) &&
        <ResultMessage
          winner="user"
          click={handleNextRound}
        />}
      {(winner === "draw" && roundNumber < 5 && credit >= 5) &&
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