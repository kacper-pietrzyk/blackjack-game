import React, { useEffect, useContext } from 'react';
import styles from './Main.module.scss';

import BackgroundText from './BackgroundText/BackgroundText';
import PlayerCards from './PlayerCards/PlayerCards';
import Bet from './Bet/Bet';

import { AppContext } from '../AppContext/AppContext';

const Main = () => {

  const { bet, setDeck, dealerCards, userCards, setUserCards, setDealerCards } = useContext(AppContext);

  const getNewDeck = () => {
    const newShuffledCardsUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6';
    fetch(newShuffledCardsUrl)
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
        throw Error(response.statusText);
      })
      .then(result => {
        setDeck(result);
        getInitialCards(result.deck_id)
      })
      .catch(err => console.log(`${err}: Failed to get cards from API`));
  };

  const getDealerCard = deckId => {
    const oneCardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    fetch(oneCardUrl)
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
        throw Error(response.statusText);
      })
      .then(result => {
        setDealerCards(result.cards);
      })
      .catch(err => console.log(`${err}: Failed to get card from API`));
  }

  const getUserCards = deckId => {
    const twoCardsUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
    fetch(twoCardsUrl)
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
        throw Error(response.statusText);
      })
      .then(result => {
        setUserCards(result.cards);
      })
      .catch(err => console.log(`${err}: Failed to get cards from API`));
  }

  const getInitialCards = deckId => {
    getUserCards(deckId);
    getDealerCard(deckId);
  }

  return (
    <main className={styles.main}>
      {dealerCards && <PlayerCards cards={dealerCards} />}
      <BackgroundText />
      {userCards && <PlayerCards cards={userCards} />}
      {bet !== 0 && <Bet getNewDeck={getNewDeck} />}
    </main>
  );
}

export default Main;