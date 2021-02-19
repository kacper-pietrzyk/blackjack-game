export const getCards = (deckId, numberOfCards) => {

  const cardsUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numberOfCards}`;

  return new Promise((resolve, reject) => {

    fetch(cardsUrl)
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
        throw Error(response.statusText);
      })
      .then(result => {
        resolve(result.cards)
        reject('Failed to get cards')
      })
      .catch(err => {
        console.log(`${err}: Failed to get cards from API`);
        alert("Server error - unfortunately the cards could not be loaded. Please try start new game.");
      });
  })
}