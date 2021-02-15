export const getCards = (deckId, numberOfCards, setPlayerCards, playerCards) => {
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
      } else {
        setPlayerCards(result.cards);
      }
    })
    .catch(err => console.log(`${err}: Failed to get cards from API`));
}