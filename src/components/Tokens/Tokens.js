import React from 'react';

import styles from './Tokens.module.scss';

const Tokens = () => {
  return (
    <div className={styles.tokensWrapper}>
      <button className={styles.tokensWrapper__token}>$5</button>
      <button className={styles.tokensWrapper__token}>$10</button>
      <button className={styles.tokensWrapper__token}>$25</button>
      <button className={styles.tokensWrapper__token}>$100</button>
    </div>
  );
}

export default Tokens;