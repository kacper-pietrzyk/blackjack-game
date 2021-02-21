import React, { useContext } from 'react';
import styles from './RoundHistory.module.scss';

import { AppContext } from '../../../AppContext/AppContext';

const RoundHistory = ({ handleShowRoundHistory }) => {

  const { history } = useContext(AppContext);


  const roundNumber = history.roundNumber.map(number => (
    <li className={styles.roundHistory__listItem} key={Math.random()}>{number}</li>
  ));

  const userCards = history.userCards.map(cards => (
    cards === "Your cards" ? <li className={styles.roundHistory__listItem} key="header">{cards}</li> :
      (<li className={`${styles.roundHistory__listItem} ${styles.roundHistory__listItem_cards}`} key={Math.random()}>
        {cards.map(card => (
          <div key={Math.random()} className={styles.roundHistory__cardsWrapper}>
            <img className={styles.roundHistory__card} src={card.images.png} alt="card" />
          </div>
        ))}
      </li>)
  ));

  const userSum = history.userSum.map(value => (
    <li className={styles.roundHistory__listItem} key={Math.random()}>{value}</li>
  ));

  const dealerCards = history.dealerCards.map(cards => (
    cards === "Dealer cards" ? <li className={styles.roundHistory__listItem} key="header">{cards}</li> :
      (<li className={`${styles.roundHistory__listItem} ${styles.roundHistory__listItem_cards}`} key={Math.random()}>
        {cards.map(card => (
          <div key={Math.random()} className={styles.roundHistory__cardsWrapper}>
            <img className={styles.roundHistory__card} src={card.images.png} alt="card" />
          </div>
        ))}
      </li>)
  ));

  const dealerSum = history.dealerSum.map(value => (
    <li className={styles.roundHistory__listItem} key={Math.random()}>{value}</li>
  ));

  const winner = history.winner.map(player => (
    <li className={styles.roundHistory__listItem} key={Math.random()}>{player}</li>
  ));

  const bet = history.bet.map(value => (
    <li className={styles.roundHistory__listItem} key={Math.random()}>{value}</li>
  ));

  const profit = history.profit.map(value => (
    <li className={styles.roundHistory__listItem} key={Math.random()}>{value}</li>
  ));

  const credit = history.credit.map(value => (
    <li className={styles.roundHistory__listItem} key={Math.random()}>{value}</li>
  ));


  return (
    <div className={styles.roundHistoryWrapper}>
      <h2 className={styles.roundHistoryWrapper__header}>Round history</h2>
      <button className={styles.roundHistoryWrapper__close} onClick={handleShowRoundHistory}>&times;</button>
      <div className={styles.roundHistory}>
        <ul className={styles.roundHistory__list}>
          {roundNumber}
        </ul>
        <ul className={styles.roundHistory__list}>
          {userCards}
        </ul>
        <ul className={styles.roundHistory__list}>
          {userSum}
        </ul>
        <ul className={styles.roundHistory__list}>
          {dealerCards}
        </ul>
        <ul className={styles.roundHistory__list}>
          {dealerSum}
        </ul>
        <ul className={styles.roundHistory__list}>
          {winner}
        </ul>
        <ul className={styles.roundHistory__list}>
          {bet}
        </ul>
        <ul className={styles.roundHistory__list}>
          {profit}
        </ul>
        <ul className={styles.roundHistory__list}>
          {credit}
        </ul>
      </div>
    </div>
  );
}

export default RoundHistory;