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
    history, setHistory,
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

  let finalCredit = 0;
  switch (winner) {
    case "user":
      finalCredit = 1.5 * bet + credit;
      break;
    case "dealer":
      finalCredit = credit;
      break;
    // default - if draw
    default:
      finalCredit = credit + bet;
      break;
  }

  let profit = 0;
  if (winner === "user") {
    profit = 0.5 * bet;
  } else if (winner === "dealer") {
    profit = -bet;
  } else {
    profit = 0;
  }

  const updateRanking = () => {

    let currentRanking = JSON.parse(localStorage.getItem("ranking"));
    //currentRanking === null in first game - when there isn't currentRanking in localStorage
    if (currentRanking === null) {
      currentRanking = [];
    }

    const id = Math.floor(Math.random() * 100000)

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const fullDate = {
      date,
      time
    }

    const newRankingData = {
      id,
      finalCredit,
      fullDate
    }

    const newRanking = [...currentRanking, newRankingData];
    const newSortedRanking = newRanking.sort((a, b) => b.finalCredit - a.finalCredit);
    newSortedRanking.splice(5);
    localStorage.setItem("ranking", JSON.stringify(newSortedRanking));
  }

  const handleNextRound = () => {

    setHistory({
      bet: [...history.bet, bet],
      credit: [...history.credit, finalCredit],
      dealerCards: [...history.dealerCards, dealerCards],
      dealerSum: [...history.dealerSum, dealerCardsSum],
      userCards: [...history.userCards, userCards],
      userSum: [...history.userSum, userCardsSum],
      profit: [...history.profit, profit],
      roundNumber: [...history.roundNumber, roundNumber],
      winner: [...history.winner, winner],
    })

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

    if (roundNumber === 5 && finalCredit !== 0) {
      updateRanking();
    }

    resetGame(
      setBet,
      setCredit,
      setDealerCards,
      setDealerCardsSum,
      setDeck,
      setIsDealAccepted,
      setIsDoubleDownAvailable,
      setIsUserTurnFinished,
      setRoundNumber,
      setHistory,
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
      <BackgroundText bet={bet} />
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
          finalCredit={finalCredit}
          newGame={handleNewGame}
        />}
      {(winner === "dealer" && roundNumber < 5 && credit >= 5) &&
        <ResultMessage
          finalCredit={finalCredit}
          newGame={handleNextRound}
        />}
      {(winner === "user" && roundNumber < 5) &&
        <ResultMessage
          finalCredit={finalCredit}
          newGame={handleNextRound}
        />}
      {(winner === "draw" && roundNumber < 5) &&
        <ResultMessage
          finalCredit={finalCredit}
          newGame={handleNextRound}
        />}
    </main>
  );
}
export default Main;