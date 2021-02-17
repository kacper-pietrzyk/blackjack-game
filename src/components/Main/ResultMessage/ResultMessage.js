import React from 'react';
import styles from './ResultMessage.module.scss';

const ResultMessage = ({ winner, click }) => {

  const userIsWinner = (
    <>
      <h2 className={styles.result__header}>Dealer bust!</h2>
      <h3 className={styles.result__header}>You win</h3>
    </>
  )

  const dealerIsWinner = (
    <>
      <h2 className={`${styles.result__header} ${styles.result__header_big}`}>Bust!</h2>
      <h3 className={styles.result__header}>You lost</h3>
    </>
  )

  const draw = (
    <>
      <h2 className={`${styles.result__header} ${styles.result__header_big}`}>Draw!</h2>
    </>
  )

  return (
    <div className={styles.resultWrapper}>
      <div className={styles.result}>
        {winner === "user" && userIsWinner}
        {winner === "dealer" && dealerIsWinner}
        {winner === "draw" && draw}
      </div>
      <button className={styles.result__nextRound} onClick={click} >Next round</button>
    </div>
  );
}

export default ResultMessage;