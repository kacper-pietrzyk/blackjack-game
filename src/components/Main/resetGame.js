export const resetGame = (setCredit, setBet, setDealerCards, setDealerCardsSum, setDeck, setIsDealAccepted, setIsDoubleDownAvailable, setIsUserTurnFinished, setWinner, setRoundNumber, setUserCards, setUserCardsSum) => {

  setCredit(1000)
  setBet(0);
  setDealerCards(null);
  setDealerCardsSum(0);
  setDeck()
  setIsDealAccepted(false);
  setIsDoubleDownAvailable(true);
  setIsUserTurnFinished(false);
  setWinner('');
  setRoundNumber(1);
  setUserCards(null);
  setUserCardsSum(0);
}