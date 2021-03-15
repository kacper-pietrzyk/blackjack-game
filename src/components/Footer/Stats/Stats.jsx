import React, { useState } from 'react';
import styles from './Stats.module.scss';

import Ranking from './Ranking/Ranking';
import RoundHistory from './RoundHistory/RoundHistory';

const Stats = () => {

  const [showRoundHistory, setShowRoundHistory] = useState(false);
  const [showRanking, setShowRanking] = useState(false);

  const handleShowRanking = e => {
    if (e.target.name === "show") {
      setShowRanking(true);
    } else {
      setShowRanking(false);
    }
  }

  const handleShowRoundHistory = e => {
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
        onClick={handleShowRanking}>
        Ranking
      </button>
      <button
        className={styles.stats__button}
        name="show"
        onClick={handleShowRoundHistory}>
        Round History
      </button>
      {(showRanking || showRoundHistory) &&
        <div
          className={styles.gamePause}>
        </div>}
      {showRanking &&
        <Ranking
          handleShowRanking={handleShowRanking} />}
      {showRoundHistory &&
        <RoundHistory
          handleShowRoundHistory={handleShowRoundHistory} />}
    </div >
  );
}

export default Stats;