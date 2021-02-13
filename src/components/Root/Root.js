import React from 'react';
import styles from './Root.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faFolderOpen, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const Root = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.header__optionsWrapper}>
          <FontAwesomeIcon icon={faSave} className={styles.header__option} />
          <FontAwesomeIcon icon={faFolderOpen} className={styles.header__option} />
          <FontAwesomeIcon icon={faSyncAlt} className={styles.header__option} />
        </div>
        <div className={styles.header__round}></div>
      </header>
      <main className={styles.main}></main>
      <footer className={styles.footer}>
        <div className={styles.footer__stats}>
          <div className={styles.stats__ranking}></div>
          <div className={styles.stats__history}></div>
        </div>
        <div className={styles.footer__player}></div>
        <div className={styles.footer__credit}></div>
      </footer>
    </div>
  );
}

export default Root;