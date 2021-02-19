export const resetGame = (setCredit, setBet, setDealerCards, setDealerCardsSum, setDeck, setIsDealAccepted, setIsDoubleDownAvailable, setIsUserTurnFinished, setRoundNumber, setUserCards, setUserCardsSum, setWinner) => {

  setCredit(1000)
  setBet(0);
  setDealerCards([]);
  setDealerCardsSum(0);
  setDeck()
  setIsDealAccepted(false);
  setIsDoubleDownAvailable(true);
  setIsUserTurnFinished(false);
  setRoundNumber(1);
  setUserCards([]);
  setUserCardsSum(0);
  setWinner('');
}