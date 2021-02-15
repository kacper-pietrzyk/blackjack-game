import React, { useState } from 'react';
import styles from './Root.module.scss';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import { AppContext } from '../AppContext/AppContext';

const Root = () => {

  const [credit, setCredit] = useState(1000);
  const [bet, setBet] = useState(0);
  const [roundNumber, setRoundNumber] = useState(1);
  const [playerSum, setPlayerSum] = useState(0);
  const [dealerSum, setDealerSum] = useState(0);
  const [shuffledCards, setshuffledCards] = useState(false);
  const [dealAccepted, setDealAccepted] = useState(false);

  const state = {
    credit,
    setCredit,
    bet,
    setBet,
    roundNumber,
    dealerSum,
    playerSum
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