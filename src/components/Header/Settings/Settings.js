import React, { useState, useContext } from 'react';
import styles from './Settings.module.scss';

import { AppContext } from '../../AppContext/AppContext';
import { resetGame } from '../../Main/resetGame';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faFolderOpen, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const Settings = ({ saveGame, loadGame }) => {

  const state = useContext(AppContext);

  const [isResetActive, setIsResetActive] = useState(false);

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
      state.setUserCards,
      state.setUserCardsSum,
      state.setWinner
    )

    setIsResetActive(true);

    setTimeout(() => {
      setIsResetActive(false);
    }, 1500);
  }

  return (
    <div>
      <FontAwesomeIcon icon={faSave} className={styles.option} onClick={saveGame} title="Zapisz grę" />
      <FontAwesomeIcon icon={faFolderOpen} className={styles.option} onClick={loadGame} title="Wczytaj grę" />
      <FontAwesomeIcon icon={faSyncAlt} className={styles.option} onClick={handleReset} title="Zresetuj grę" />
      {state.isSaveActive && <div className={styles.resetMessage}><h2 className={styles.resetMessage__text}>Saving...</h2></div>}
      {state.isLoadActive && <div className={styles.resetMessage}><h2 className={styles.resetMessage__text}>Loading...</h2></div>}
      {isResetActive && <div className={styles.resetMessage}><h2 className={styles.resetMessage__text}>Reset...</h2></div>}
    </div>
  );
}

export default Settings;