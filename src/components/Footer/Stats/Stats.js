import React, { useState } from 'react';

import styles from './Stats.module.scss';

import Ranking from './Ranking/Ranking';
import RoundHistory from './RoundHistory/RoundHistory';

const Stats = () => {

  const [showRoundHistory, setShowRoundHistory] = useState(false);
  const [showRanking, setRanking] = useState(false);

  const handleRanking = e => {
    if (e.target.name === "show") {
      setRanking(true);
    } else {
      setRanking(false);
    }
  }

  const handleRoundHistory = e => {
    if (e.target.name === "show") {
      setShowRoundHistory(true);
    } else {
      setShowRoundHistory(false);
    }
  }

  return (
    <div className={styles.stats}>
      <button
        className={styles.stats__button}
        name="show"
        onClick={handleRanking}>
        Ranking
      </button>
      <button
        className={styles.stats__button}
        name="show"
        onClick={handleRoundHistory}>
        Round History
      </button>
      {(showRanking || showRoundHistory) &&
        <div
          className={styles.gamePause}>
        </div>}
      {showRanking &&
        <Ranking
          handleRanking={handleRanking} />}
      {showRoundHistory &&
        <RoundHistory
          handleRoundHistory={handleRoundHistory} />}
    </div >
  );
}

export default Stats;