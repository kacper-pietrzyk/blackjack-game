import React, { useContext } from 'react';
import styles from './Main.module.scss';

import DealerCards from './dealerCards/DealerCards';
import BackgroundText from './BackgroundText/BackgroundText';
import PlayerCards from './PlayerCards/PlayerCards';
import Bet from './Bet/Bet';

import { AppContext } from '../AppContext/AppContext';

const Main = () => {

  const { bet } = useContext(AppContext);

  return (
    <main className={styles.main}>
      <DealerCards />
      <BackgroundText />
      <PlayerCards />
      {bet !== 0 && <Bet />}
    </main>
  );
}

export default Main;