import React, { useState } from 'react';
import styles from './Root.module.scss';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import { AppContext } from '../AppContext/AppContext';

const Root = () => {

  const [bet, setBet] = useState(0);
  const [credit, setCredit] = useState(1000);
  const [deck, setDeck] = useState();
  const [roundNumber, setRoundNumber] = useState(1);
  const [userCards, setUserCards] = useState();
  const [dealerCards, setDealerCards] = useState();
  const [isDealAccepted, setIsDealAccepted] = useState(false);

  const state = {
    credit,
    setCredit,
    bet,
    setBet,
    deck,
    setDeck,
    roundNumber,
    dealerCards,
    setDealerCards,
    userCards,
    setUserCards,
    isDealAccepted,
    setIsDealAccepted,
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