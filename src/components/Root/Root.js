import React, { useState } from 'react';
import styles from './Root.module.scss';

import { AppContext } from '../AppContext/AppContext';

import Header from '../Header/Header';
import DealerCards from '../dealerCards/DealerCards';
import BackgroundText from '../BackgroundText/BackgroundText';
import PlayerCards from '../PlayerCards/PlayerCards';
import Bet from '../Bet/Bet';
import Stats from '../Stats/Stats';
import Tokens from '../Tokens/Tokens';
import Actions from '../Actions/Actions';

const Root = () => {

  const [credit, setCredit] = useState(1000);
  const [bet, setBet] = useState(0);
  const [roundNumber, setRoundNumber] = useState(1);
  const [playerSum, setPlayerSum] = useState(0);
  const [dealerSum, setDealerSum] = useState(0);

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
        <main className={styles.main}>
          <DealerCards />
          <BackgroundText />
          <PlayerCards />
          {bet !== 0 && <Bet />}
        </main>
        <footer className={`${styles.footer} ${styles.noSelect}`}>
          <Stats />
          <Tokens />
          {/* <Actions /> */}
          <p>Credit: ${credit}</p>
        </footer>
      </div>
    </AppContext.Provider>
  );
}

export default Root;