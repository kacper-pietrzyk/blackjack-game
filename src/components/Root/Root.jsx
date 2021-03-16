import React, { useState } from 'react';
import styles from './Root.module.scss';

import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
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
    profit: ["Profit"],
    roundNumber: ["Round"],
    winner: ["Winner"],
  }

  const [bet, setBet] = useState(0);
  const [credit, setCredit] = useState(1000);
  const [dealerCards, setDealerCards] = useState([]);
  const [dealerCardsSum, setDealerCardsSum] = useState(0);
  const [deck, setDeck] = useState();
  const [history, setHistory] = useState(roundHistory);
  const [isDealAccepted, setIsDealAccepted] = useState(false);
  const [isDoubleDownAvailable, setIsDoubleDownAvailable] = useState(true);
  const [isLoadActive, setIsLoadActive] = useState(false);
  const [isSaveActive, setIsSaveActive] = useState(false);
  const [isUserTurnFinished, setIsUserTurnFinished] = useState(false);
  const [roundNumber, setRoundNumber] = useState(1);
  const [userCards, setUserCards] = useState([]);
  const [userCardsSum, setUserCardsSum] = useState(0);
  const [winner, setWinner] = useState('');

  const state = {
    bet, setBet,
    credit, setCredit,
    dealerCards, setDealerCards,
    dealerCardsSum, setDealerCardsSum,
    deck, setDeck,
    history, setHistory,
    isDealAccepted, setIsDealAccepted,
    isDoubleDownAvailable, setIsDoubleDownAvailable,
    isLoadActive,
    isSaveActive,
    isUserTurnFinished, setIsUserTurnFinished,
    roundNumber, setRoundNumber,
    userCards, setUserCards,
    userCardsSum, setUserCardsSum,
    winner, setWinner
  }

  const handleSave = () => {
    localStorage.setItem("my-game-save", JSON.stringify(state));
    setIsSaveActive(true);

    setTimeout(() => {
      setIsSaveActive(false);
    }, 1000);
  }

  const handleLoad = () => {

    const gameSave = prompt("If you want to load the game from your own earlier save, please leave 'my-game-save' text below and click 'OK'. If you want to load the game from autosave, please type 'autosave' below and click 'OK'", "my-game-save");

    const gameToLoad = JSON.parse(localStorage.getItem(gameSave));
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

  const handleWarning = e => {
    e.preventDefault();
    localStorage.setItem("autosave", JSON.stringify(state));
    e.returnValue = '';
  }
  // Firefox doesn't support this operation
  window.addEventListener('beforeunload', handleWarning);

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