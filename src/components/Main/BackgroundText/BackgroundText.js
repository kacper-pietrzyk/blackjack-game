import React from 'react';
import styles from './BackgroundText.module.scss';

const BackgroundText = ({ bet }) => {
  return (
    <div className={`${styles.backgroundTextWrapper} ${styles.noSelect}`}>
      <h1 className={styles.backgroundTextWrapper__text}>Blackjack pays 3 to 2</h1>
      <h2 className={styles.backgroundTextWrapper__text}>Dealer must stand on 17 and must draw to 16</h2>
      {!bet && <h2 className={styles.backgroundTextWrapper__betInfo}>Please place a bet</h2>}
    </div>
  );
}

export default BackgroundText;