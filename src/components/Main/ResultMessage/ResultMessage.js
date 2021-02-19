import React from 'react';
import styles from './ResultMessage.module.scss';

const ResultMessage = ({ bet, credit, winner, newGame, roundNumber }) => {

  const userIsWinner = (
    <>
      <h2 className={styles.result__header}>Dealer loses!</h2>
      <h3 className={styles.result__header}>You win ${1.5 * bet}</h3>
    </>
  )

  const dealerIsWinner = (
    <>
      <h2 className={`${styles.result__header} ${styles.result__header_big}`}>Dealer wins!</h2>
      <h3 className={styles.result__header}>You lose ${bet}</h3>
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
      {winner && <button className={styles.result__nextGame} onClick={newGame}>Next round</button>}
      {(credit === 0 || (roundNumber === 5)) && <button className={styles.result__nextGame} onClick={newGame}>New game</button>}
    </div>
  );
}

export default ResultMessage;