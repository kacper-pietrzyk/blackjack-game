import React from 'react';
import styles from './Ranking.module.scss';

const Ranking = ({ handleRanking }) => {

  let rankingToLoad = JSON.parse(localStorage.getItem("ranking"));
  //rankingToLoad === null in first game - when there isn't currentRanking in localStorage
  if (rankingToLoad === null) {
    rankingToLoad = [];
  }

  const ranking = rankingToLoad.map(rank => (
    <li className={styles.ranking__listItem} key={rank.id}>
      <p>{rankingToLoad.indexOf(rank) + 1}</p>
      <p>${rank.finalCredit}</p>
      <div className={styles.ranking__date}>
        <p>{rank.fullDate.time}</p>
        <p>{rank.fullDate.date}</p>
      </div>
    </li>
  ));

  return (
    <div className={styles.ranking} >
      <h2 className={styles.ranking__header}>Top 5 historic results</h2>
      <button className={styles.ranking__close} onClick={handleRanking}>&times;</button>
      <ul className={styles.ranking__list}>
        <li className={styles.ranking__listItem}>
          <p>No.</p>
          <p>credit</p>
          <p className={styles.ranking__dateHeader}>Date</p>
        </li>
        {ranking.length ? ranking : (
          <div className={styles.ranking__empty}>
            <h3>There is no record yet.</h3>
            <h2>Your result can be first!</h2>
          </div>)
        }
      </ul>
    </div>
  );
}

export default Ranking;