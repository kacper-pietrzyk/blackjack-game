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
        <p className={`${styles.header__round} ${styles.noSelect}`}>Round 2</p>
      </header>
      <main className={styles.main}>
        <div className={`${styles.main__backgroundTextWrapper} ${styles.noSelect}`}>
          <h1 className={styles.main__backgroundTextWrapper_text}>Blackjack pays 3 to 2</h1>
          <h2 className={styles.main__backgroundTextWrapper_text}>Dealer must stand on 17 and must draw to 16</h2>
        </div>
      </main>
      <footer className={`${styles.footer} ${styles.noSelect}`}>
        <div>
          <p className={styles.footer__ranking}>Ranking</p>
          <p className={styles.footer__history}>Round History</p>
        </div>
        <div className={styles.footer__player}>
          <div className={styles.footer__playerChip}>
            <p>$5</p>
          </div>
          <div className={styles.footer__playerChip}>
            <p>$10</p>
          </div>
          <div className={styles.footer__playerChip}>
            <p>$25</p>
          </div>
          <div className={styles.footer__playerChip}>
            <p>$100</p>
          </div>
        </div>
        <p>Credit: $1000</p>
      </footer>
    </div>
  );
}

export default Root;