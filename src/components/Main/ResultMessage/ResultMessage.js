import React, { useContext } from 'react';
import styles from './ResultMessage.module.scss';

import { AppContext } from '../../AppContext/AppContext';

const ResultMessage = ({ finalCredit, newGame }) => {

  const { bet, roundNumber, winner } = useContext(AppContext);

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
      <h3 className={styles.result__header}>Your final credit is ${finalCredit}</h3>
    </>
  )

  return (
    <div className={styles.resultWrapper}>
      <div className={styles.result}>
        {winner === "user" && userIsWinner}
        {winner === "dealer" && dealerIsWinner}
        {winner === "draw" && draw}
        {(finalCredit === 0 || roundNumber === 5) && gameOver}
      </div>
      {(winner && roundNumber < 5 && finalCredit !== 0) && <button className={styles.result__nextGame} onClick={newGame}>Next round</button>}
      {(finalCredit === 0 || (roundNumber === 5)) && <button className={styles.result__nextGame} onClick={newGame}>New game</button>}
    </div>
  );
}

export default ResultMessage;