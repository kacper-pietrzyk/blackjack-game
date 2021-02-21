import React, { useState, useContext } from 'react';
import styles from './Settings.module.scss';

import Info from './Info/Info';

import { AppContext } from '../../AppContext/AppContext';
import { resetGame } from '../../Main/resetGame';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faFolderOpen, faSyncAlt, faQuestion } from '@fortawesome/free-solid-svg-icons';

const Settings = ({ saveGame, loadGame }) => {

  const state = useContext(AppContext);

  const [isResetActive, setIsResetActive] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleReset = () => {

    resetGame(
      state.setBet,
      state.setCredit,
      state.setDealerCards,
      state.setDealerCardsSum,
      state.setDeck,
      state.setIsDealAccepted,
      state.setIsDoubleDownAvailable,
      state.setIsUserTurnFinished,
      state.setRoundNumber,
      state.setHistory,
      state.setUserCards,
      state.setUserCardsSum,
      state.setWinner
    )

    setIsResetActive(true);

    setTimeout(() => {
      setIsResetActive(false);
    }, 1000);
  }

  const handleShowInfo = e => {
    if (e.target.name === "close") {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  }

  return (
    <div>
      <FontAwesomeIcon
        icon={faSave}
        className={styles.option}
        onClick={saveGame}
        title="Save game"
      />
      <FontAwesomeIcon
        icon={faFolderOpen}
        className={styles.option}
        onClick={loadGame}
        title="Load game"
      />
      <FontAwesomeIcon
        icon={faSyncAlt}
        className={styles.option}
        onClick={handleReset}
        title="Reset"
      />
      <FontAwesomeIcon
        icon={faQuestion}
        className={styles.option}
        onClick={handleShowInfo}
        title="Info"
      />
      {showInfo &&
        <div
          className={styles.gamePause}>
        </div>}
      {showInfo &&
        <Info
          handleShowInfo={handleShowInfo} />}
      {state.isSaveActive &&
        <div
          className={styles.resetMessage}>
          <h2 className={styles.resetMessage__text}>Saving...</h2>
        </div>}
      {state.isLoadActive &&
        <div
          className={styles.resetMessage}>
          <h2 className={styles.resetMessage__text}>Loading...</h2>
        </div>}
      {isResetActive &&
        <div
          className={styles.resetMessage}>
          <h2 className={styles.resetMessage__text}>Reset...</h2>
        </div>}
    </div>
  );
}

export default Settings;