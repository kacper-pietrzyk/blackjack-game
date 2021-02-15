import React from 'react';
import styles from './BackgroundText.module.scss';

const BackgroundText = () => {
  return (
    <div className={`${styles.backgroundTextWrapper} ${styles.noSelect}`}>
      <h1 className={styles.backgroundTextWrapper__text}>Blackjack pays 3 to 2</h1>
      <h2 className={styles.backgroundTextWrapper__text}>Dealer must stand on 17 and must draw to 16</h2>
    </div>
  );
}

export default BackgroundText;