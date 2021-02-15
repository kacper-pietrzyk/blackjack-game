import React, { useContext } from 'react';
import styles from './Main.module.scss';

import BackgroundText from './BackgroundText/BackgroundText';
import PlayerCards from './PlayerCards/PlayerCards';
import Bet from './Bet/Bet';

import { AppContext } from '../AppContext/AppContext';
import { getCards } from '../Root/getCards';

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

  const getInitialCards = deckId => {
    // get user cards
    getCards(deckId, 2, setUserCards);
    // get dealer card
    getCards(deckId, 1, setDealerCards);
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