import React, { useState } from 'react';

import styles from './Stats.module.scss';

import Ranking from './Ranking/Ranking';
import RoundHistory from './RoundHistory/RoundHistory';

const Stats = () => {

  const [showRoundHistory, setShowRoundHistory] = useState(false);

  let showRanking = false;

  const handleRoundHistory = e => {
    if (e.target.name === "show") {
      setShowRoundHistory(true);
    } else {
      setShowRoundHistory(false);
    }
  }

  return (
    <div className={styles.stats}>
      <button className={styles.stats__button}>Ranking</button>
      {showRanking && <Ranking />}
      <button className={styles.stats__button} name="show" onClick={handleRoundHistory}>Round History</button>
      {showRoundHistory && <div className={styles.gamePause}></div>}
      {showRoundHistory && <RoundHistory handleRoundHistory={handleRoundHistory} />}
    </div >
  );
}

export default Stats;