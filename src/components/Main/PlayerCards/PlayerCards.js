import React from 'react';
import styles from './PlayerCards.module.scss';

import CardPicture from '../CardPicture/CardPicture';

// import { AppContext } from '../../AppContext/AppContext';

const PlayerCards = ({ cards }) => {

  // const { dealerCards, userCards } = useContext(AppContext);

  const getPlayerCardsSum = () => {

    const allValues = cards.map(card => {
      if (card.value === "JACK" ||
        card.value === "QUEEN" ||
        card.value === "KING") {
        return 10;
      } else if (card.value === "ACE") {
        return card.value;
      }
      else {
        return Number(card.value);
      }
    })

    const numberValues = allValues.filter(value => Number.isInteger(value));

    const aceValues = allValues.filter(value => value === "ACE");

    const integerSum = numberValues.reduce((prevValue, value) => {
      return prevValue + value;
    })
    let sum = integerSum;
    if (aceValues.length) {
      aceValues.forEach(() => {
        if (sum <= 10) {
          sum += 11;
        } else {
          sum += 1;
        }
      })
    }

    return sum;
  }
  const playerCardsSum = getPlayerCardsSum();

  const cardsImg = cards.map(card => (
    <CardPicture key={card.code} src={card.images.png} />
  ))

  return (
    <div className={styles.player}>
      {cardsImg}
      {playerCardsSum > 0 && <p className={styles.player__cardsValue}>{playerCardsSum}</p>}
    </div>
  );
}

export default PlayerCards;