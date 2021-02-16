import { getPlayerCardsSum } from './getPlayerCardsSum';

export const getCards = (deckId, numberOfCards, playerCards, setPlayerCards, setPlayerSum) => {
  const cardsUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numberOfCards}`;

  fetch(cardsUrl)
    .then(response => {
      if (response.status === 200) {
        return response.json()
      }
      throw Error(response.statusText);
    })
    .then(result => {
      if (playerCards) {
        setPlayerCards([...playerCards, ...result.cards]);
        const playerSum = getPlayerCardsSum([...playerCards, ...result.cards]);
        setPlayerSum(playerSum);
      } else {
        setPlayerCards(result.cards);
        const playerSum = getPlayerCardsSum(result.cards);
        setPlayerSum(playerSum);
      }
    })
    .catch(err => console.log(`${err}: Failed to get cards from API`));
}