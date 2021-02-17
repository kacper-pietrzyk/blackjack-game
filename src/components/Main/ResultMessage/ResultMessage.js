import React from 'react';
import styles from './ResultMessage.module.scss';

const ResultMessage = ({ credit, winner, click, roundNumber }) => {

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

  const gameOver = (
    <>
      <h2 className={`${styles.result__header} ${styles.result__header_big}`}>Game over!</h2>
      <h3 className={styles.result__header}>Your credit is ${credit}</h3>
    </>
  )

  return (
    <div className={styles.resultWrapper}>
      <div className={styles.result}>
        {(credit === 0 || roundNumber === 5) && gameOver}
        {winner === "user" && userIsWinner}
        {winner === "dealer" && dealerIsWinner}
        {winner === "draw" && draw}
      </div>
      {winner && <button className={styles.result__nextGame} onClick={click}>Next round</button>}
      {(credit === 0 || (roundNumber === 5)) && <button className={styles.result__nextGame} onClick={click}>New game</button>}
    </div>
  );
}

export default ResultMessage;