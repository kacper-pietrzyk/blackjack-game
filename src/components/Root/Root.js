import React, { useState } from 'react';
import styles from './Root.module.scss';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

import { AppContext } from '../AppContext/AppContext';

const Root = () => {

  const [bet, setBet] = useState(0);
  const [credit, setCredit] = useState(1000);
  const [dealerCards, setDealerCards] = useState();
  const [dealerCardsSum, setDealerCardsSum] = useState(0);
  const [deck, setDeck] = useState();
  const [isDealAccepted, setIsDealAccepted] = useState(false);
  const [isDoubleDownAvailable, setIsDoubleDownAvailable] = useState(true);
  const [isUserTurnFinished, setIsUserTurnFinished] = useState(false);
  const [winner, setWinner] = useState('');
  const [roundNumber, setRoundNumber] = useState(1);
  const [userCards, setUserCards] = useState();
  const [userCardsSum, setUserCardsSum] = useState(0);
  const [saveActive, setSaveActive] = useState(false);
  const [loadActive, setLoadActive] = useState(false);

  const state = {
    bet, setBet,
    credit, setCredit,
    dealerCards, setDealerCards,
    dealerCardsSum, setDealerCardsSum,
    deck, setDeck,
    isDealAccepted, setIsDealAccepted,
    isDoubleDownAvailable, setIsDoubleDownAvailable,
    isUserTurnFinished, setIsUserTurnFinished,
    winner, setWinner,
    roundNumber, setRoundNumber,
    userCards, setUserCards,
    userCardsSum, setUserCardsSum,
    saveActive, loadActive
  }

  const handleSave = () => {
    localStorage.setItem("stateGame", JSON.stringify(state));
    setSaveActive(true);

    setTimeout(() => {
      setSaveActive(false);
    }, 1500);
  }

  const handleLoad = () => {
    setLoadActive(true);

    const gameToLoad = JSON.parse(localStorage.getItem("stateGame"));
    setBet(gameToLoad.bet);
    setCredit(gameToLoad.credit);
    setDealerCards(gameToLoad.dealerCards);
    setDealerCardsSum(gameToLoad.dealerCardsSum);
    setDeck(gameToLoad.deck);
    setIsDealAccepted(gameToLoad.isDealAccepted);
    setIsDoubleDownAvailable(gameToLoad.isDoubleDownAvailable);
    setIsUserTurnFinished(gameToLoad.isUserTurnFinished);
    setWinner(gameToLoad.winner);
    setRoundNumber(gameToLoad.roundNumber);
    setUserCards(gameToLoad.userCards);
    setUserCardsSum(gameToLoad.userCardsSum);

    setTimeout(() => {
      setLoadActive(false);
    }, 1500);
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