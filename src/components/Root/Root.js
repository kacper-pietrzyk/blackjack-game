import React, { useState } from 'react';
import styles from './Root.module.scss';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

import { AppContext } from '../AppContext/AppContext';

const Root = () => {

  const roundHistory = {
    bet: ["Bet"],
    credit: ["Credit"],
    dealerCards: ["Dealer cards"],
    dealerSum: ["Dealer sum"],
    userCards: ["Your cards"],
    userSum: ["Your sum"],
    profit: ["Profit/Loss"],
    roundNumber: ["Round"],
    winner: ["Winner"],
  }

  const [bet, setBet] = useState(0);
  const [credit, setCredit] = useState(1000);
  const [dealerCards, setDealerCards] = useState([]);
  const [dealerCardsSum, setDealerCardsSum] = useState(0);
  const [deck, setDeck] = useState();
  const [isDealAccepted, setIsDealAccepted] = useState(false);
  const [isDoubleDownAvailable, setIsDoubleDownAvailable] = useState(true);
  const [isLoadActive, setIsLoadActive] = useState(false);
  const [isSaveActive, setIsSaveActive] = useState(false);
  const [isUserTurnFinished, setIsUserTurnFinished] = useState(false);
  const [roundNumber, setRoundNumber] = useState(1);
  const [history, setHistory] = useState(roundHistory);
  const [userCards, setUserCards] = useState([]);
  const [userCardsSum, setUserCardsSum] = useState(0);
  const [winner, setWinner] = useState('');

  const state = {
    bet, setBet,
    credit, setCredit,
    dealerCards, setDealerCards,
    dealerCardsSum, setDealerCardsSum,
    deck, setDeck,
    isDealAccepted, setIsDealAccepted,
    isDoubleDownAvailable, setIsDoubleDownAvailable,
    isLoadActive,
    isSaveActive,
    isUserTurnFinished, setIsUserTurnFinished,
    roundNumber, setRoundNumber,
    history, setHistory,
    userCards, setUserCards,
    userCardsSum, setUserCardsSum,
    winner, setWinner
  }

  const handleSave = () => {
    localStorage.setItem("stateGame", JSON.stringify(state));
    setIsSaveActive(true);

    setTimeout(() => {
      setIsSaveActive(false);
    }, 1000);
  }

  const handleLoad = () => {

    const gameToLoad = JSON.parse(localStorage.getItem("stateGame"));
    if (gameToLoad) {
      setIsLoadActive(true);

      setBet(gameToLoad.bet);
      setCredit(gameToLoad.credit);
      setDealerCards(gameToLoad.dealerCards);
      setDealerCardsSum(gameToLoad.dealerCardsSum);
      setDeck(gameToLoad.deck);
      setIsDealAccepted(gameToLoad.isDealAccepted);
      setIsDoubleDownAvailable(gameToLoad.isDoubleDownAvailable);
      setIsUserTurnFinished(gameToLoad.isUserTurnFinished);
      setRoundNumber(gameToLoad.roundNumber);
      setHistory(gameToLoad.history);
      setUserCards(gameToLoad.userCards);
      setUserCardsSum(gameToLoad.userCardsSum);
      setWinner(gameToLoad.winner);

      setTimeout(() => {
        setIsLoadActive(false);
      }, 1000);
    }
  }

  return (
    <AppContext.Provider value={state} >
      <div className={styles.wrapper}>
        <Header saveGame={handleSave} loadGame={handleLoad} />
        <Main />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default Root;