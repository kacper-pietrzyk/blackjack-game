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
  }

  return (
    <AppContext.Provider value={state}>
      <div className={styles.wrapper}>
        <Header />
        <Main />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default Root;