import React from 'react';
import styles from './Root.module.scss';

import Header from '../Header/Header';
import DealerCards from '../dealerCards/DealerCards';
import BackgroundText from '../BackgroundText/BackgroundText';
import PlayerCards from '../PlayerCards/PlayerCards';
import Bet from '../Bet/Bet';
import Stats from '../Stats/Stats';
import Tokens from '../Tokens/Tokens';
import Actions from '../Actions/Actions';

const Root = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <DealerCards />
        <BackgroundText />
        <PlayerCards />
        <Bet />
      </main>
      <footer className={`${styles.footer} ${styles.noSelect}`}>
        <Stats />
        <Tokens />
        {/* <Actions /> */}
        <p>Credit: $1000</p>
      </footer>
    </div>
  );
}

export default Root;