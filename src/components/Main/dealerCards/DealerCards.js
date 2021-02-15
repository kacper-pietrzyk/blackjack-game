import React, { useContext } from 'react';
import styles from './DealerCards.module.scss';

import CardPicture from '../CardPicture/CardPicture';

import { AppContext } from '../../AppContext/AppContext';

const DealerCards = () => {

  const { dealerCards } = useContext(AppContext);

  const getDealerCardsSum = () => {

    const allValues = dealerCards.map(card => {
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
  const dealerCardsSum = getDealerCardsSum();

  const cardsImg = dealerCards.map(card => (
    <CardPicture key={card.code} src={card.images.png} />
  ))

  return (
    <div className={styles.dealer}>
      {cardsImg}
      {dealerCardsSum && <p className={styles.dealer__cardsValue}>{dealerCardsSum}</p>}
    </div>
  );
}

export default DealerCards;