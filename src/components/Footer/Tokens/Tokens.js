import React, { useContext } from 'react';
import styles from './Tokens.module.scss';

import { AppContext } from '../../AppContext/AppContext';

const Tokens = () => {

  const {
    bet, setBet,
    credit, setCredit, } = useContext(AppContext);

  const increaseBet = e => {
    const value = Number(e.target.value);
    setCredit(credit - value);
    setBet(bet + value);
  }

  return (
    <div className={styles.tokensWrapper}>
      {credit >= 5 && <button className={`${styles.tokensWrapper__token} ${styles.tokensWrapper__token_5}`} value={5} onClick={increaseBet}>$5</button>}
      {credit >= 10 && <button className={`${styles.tokensWrapper__token} ${styles.tokensWrapper__token_10}`} value={10} onClick={increaseBet}>$10</button>}
      {credit >= 25 && <button className={`${styles.tokensWrapper__token} ${styles.tokensWrapper__token_25}`} value={25} onClick={increaseBet}>$25</button>}
      {credit >= 100 && <button className={`${styles.tokensWrapper__token} ${styles.tokensWrapper__token_100}`} value={100} onClick={increaseBet}>$100</button>}
      {credit > 0 && <button className={`${styles.tokensWrapper__token} ${styles.tokensWrapper__token_allIn}`} value={credit} onClick={increaseBet}>All-in</button>}
      {/* {credit === 0 && <h2 className={styles.tokensWrapper__allIn}>All-in</h2>} */}
    </div>
  );
}

export default Tokens;