import React, { useState, useContext } from 'react';

import styles from './Settings.module.scss';

import { AppContext } from '../../AppContext/AppContext';
import { resetGame } from '../../Main/resetGame';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faFolderOpen, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const Settings = ({ saveGame, loadGame }) => {

  const state = useContext(AppContext);
  const { saveActive, loadActive } = useContext(AppContext);

  const [resetActive, setResetActive] = useState(false);

  const handleReset = () => {

    resetGame(
      state.setCredit,
      state.setBet,
      state.setDealerCards,
      state.setDealerCardsSum,
      state.setDeck,
      state.setIsDealAccepted,
      state.setIsDoubleDownAvailable,
      state.setIsUserTurnFinished,
      state.setWinner,
      state.setRoundNumber,
      state.setUserCards,
      state.setUserCardsSum
    )

    setResetActive(true);

    setTimeout(() => {
      setResetActive(false);
    }, 1500);
  }



  return (
    <div>
      <FontAwesomeIcon icon={faSave} className={styles.option} onClick={saveGame} title="Zapisz grę" />
      <FontAwesomeIcon icon={faFolderOpen} className={styles.option} onClick={loadGame} title="Wczytaj grę" />
      <FontAwesomeIcon icon={faSyncAlt} className={styles.option} onClick={handleReset} title="Zresetuj grę" />
      {resetActive && <div className={styles.resetMessage}><h2 className={styles.resetMessage__text}>Reset...</h2></div>}
      {saveActive && <div className={styles.resetMessage}><h2 className={styles.resetMessage__text}>Save...</h2></div>}
      {loadActive && <div className={styles.resetMessage}><h2 className={styles.resetMessage__text}>Load...</h2></div>}
    </div>
  );
}

export default Settings;