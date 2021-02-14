import React from 'react';
import styles from './Root.module.scss';

import Header from '../Header/Header';
import Stats from '../Stats/Stats';
import Tokens from '../Tokens/Tokens';
import Actions from '../Actions/Actions';
import BackgroundText from '../BackgroundText/BackgroundText';

const Root = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <BackgroundText />
        <div className={styles.main__dealerCards}></div>
        <div className={styles.main__playerCards}></div>
        <div className={styles.main__bet}></div>
      </main>
      <footer className={`${styles.footer} ${styles.noSelect}`}>
        <Stats />
        {/* <Tokens /> */}
        <Actions />
        <p>Credit: $1000</p>
      </footer>
    </div>
  );
}

export default Root;