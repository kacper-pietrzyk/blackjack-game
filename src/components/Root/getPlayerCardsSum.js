export const getPlayerCardsSum = cards => {

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