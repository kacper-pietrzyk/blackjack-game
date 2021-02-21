import React from 'react';
import styles from './Info.module.scss';

const Info = ({ handleShowInfo }) => {
  return (
    <div className={styles.info}>
      <h2 className={styles.info__header}>Information about Blackjack game</h2>
      <button className={styles.info__close} name="close" onClick={handleShowInfo}>&times;</button>
      <div>
        <p>This game card is 1-on-1 (player vs automated dealer) turn based blackjack game.</p>
        <p>Starting credit is $1000.</p>
        <p className={styles.info__spaceParagraph}>Cards from 6 decks are shuffled before the game begins.</p>
        <p>Each game consist of 5 rounds. After game the final credit is added to ranking.</p>
        <p>Each round starts with the player placing a bet and then the cards are dealt.</p>
        <p className={styles.info__spaceParagraph}>Winnings are always 1.5x the bet, losing means the bet is gone. Draw means no profit and no loss.</p>
        <p>During the game the hands from every round and their result is saved and displayed in 'Round History'.</p>
        <p>The game can be saved, loaded and reset at any time by icons in the upper left corner.</p>
        <p className={styles.info__spaceParagraph}>The game saves (as autosave) when the tab or window is closed.</p>
        <p>More information about blackjack can be read <a className={styles.info__link} href="https://pl.wikipedia.org/wiki/Blackjack">here</a>.</p>
      </div>
    </div>
  )
}

export default Info;