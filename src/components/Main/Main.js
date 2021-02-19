import React, { useContext } from 'react';
import styles from './Main.module.scss';

import BackgroundText from './BackgroundText/BackgroundText';
import Bet from './Bet/Bet';
import PlayerCards from './PlayerCards/PlayerCards';
import ResultMessage from './ResultMessage/ResultMessage';

import { AppContext } from '../AppContext/AppContext';
import { getCards } from '../Root/getCards';
import { getPlayerCardsSum } from '../Root/getPlayerCardsSum';
import { resetGame } from './resetGame';

const Main = () => {

  const {
    bet, setBet,
    credit, setCredit,
    deck, setDeck,
    dealerCards, setDealerCards,
    dealerCardsSum, setDealerCardsSum,
    setIsDealAccepted,
    setIsDoubleDownAvailable,
    setIsUserTurnFinished,
    userCards, setUserCards,
    userCardsSum, setUserCardsSum,
    setRoundNumber, roundNumber,
    winner, setWinner } = useContext(AppContext);

  const startNewDeal = () => {
    // get new deck if it's first round
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
      // if it's not first round - get cards from current deck
      getInitialCards(deck.deck_id)
    }
  };

  const getInitialCards = async (deckId) => {
    // get user cards
    const initialUserCards = await getCards(deckId, 2);
    setUserCards(initialUserCards);
    const userSum = getPlayerCardsSum(initialUserCards);
    setUserCardsSum(userSum);

    // get dealer card
    const initialDealerCards = await getCards(deckId, 1);
    setDealerCards(initialDealerCards);
    const dealerSum = getPlayerCardsSum(initialDealerCards);
    setDealerCardsSum(dealerSum);
  }

  const handleNextRound = () => {
    if (winner === "user") {
      setCredit(credit + 1.5 * bet)
    } else if (winner === "draw") {
      setCredit(credit + bet);
    }
    setBet(0);
    setDealerCards([]);
    setDealerCardsSum(0);
    setIsDealAccepted(false);
    setIsDoubleDownAvailable(true);
    setIsUserTurnFinished(false);
    setRoundNumber(roundNumber + 1);
    setUserCards([]);
    setUserCardsSum(0);
    setWinner('');
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
      setRoundNumber,
      setUserCards,
      setUserCardsSum,
      setWinner
    )
  }

  return (
    <main className={styles.main}>
      {dealerCards.length > 0 &&
        <PlayerCards
          cards={dealerCards}
          playerCardsSum={dealerCardsSum}
        />}
      <BackgroundText />
      {userCards.length > 0 &&
        <PlayerCards
          cards={userCards}
          playerCardsSum={userCardsSum}
        />}
      {bet !== 0 &&
        <Bet
          startNewDeal={startNewDeal}
        />}
      {((credit === 0 && winner === "dealer") || (roundNumber === 5 && winner)) &&
        <ResultMessage
          credit={credit}
          newGame={handleNewGame}
          roundNumber={roundNumber}
        />}
      {(winner === "dealer" && roundNumber < 5 && credit >= 5) &&
        <ResultMessage
          bet={bet}
          winner="dealer"
          newGame={handleNextRound}
        />}
      {(winner === "user" && roundNumber < 5) &&
        <ResultMessage
          bet={bet}
          winner="user"
          newGame={handleNextRound}
        />}
      {(winner === "draw" && roundNumber < 5) &&
        <ResultMessage
          winner="draw"
          newGame={handleNextRound}
        />}
    </main>
  );
}

export default Main;