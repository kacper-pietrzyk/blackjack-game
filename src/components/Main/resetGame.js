export const resetGame = (setBet, setCredit, setDealerCards, setDealerCardsSum, setDeck, setIsDealAccepted, setIsDoubleDownAvailable, setIsUserTurnFinished, setRoundNumber, setHistory, setUserCards, setUserCardsSum, setWinner) => {

  const roundHistory = {
    bet: ["Bet"],
    credit: ["Credit"],
    dealerCards: ["Dealer cards"],
    dealerSum: ["Dealer sum"],
    userCards: ["Your cards"],
    userSum: ["Your sum"],
    profit: ["Profit"],
    roundNumber: ["Round"],
    winner: ["Winner"],
  }

  setBet(0);
  setCredit(1000);
  setDealerCards([]);
  setDealerCardsSum(0);
  setDeck()
  setIsDealAccepted(false);
  setIsDoubleDownAvailable(true);
  setIsUserTurnFinished(false);
  setRoundNumber(1);
  setHistory(roundHistory);
  setUserCards([]);
  setUserCardsSum(0);
  setWinner('');
}