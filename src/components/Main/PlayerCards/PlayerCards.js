import React from 'react';
import styles from './PlayerCards.module.scss';

import CardPicture from '../CardPicture/CardPicture';

const PlayerCards = ({ cards, playerCardsSum }) => {

  const cardsImg = cards.map(card => (
    <CardPicture key={card.code + Math.floor(Math.random() * 10000)} src={card.images.png} />
  ))

  return (
    <div className={styles.player}>
      {cardsImg}
      {playerCardsSum > 0 && <p className={styles.player__cardsValue}>{playerCardsSum}</p>}
    </div>
  );
}

export default PlayerCards;