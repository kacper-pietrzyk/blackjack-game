import React from 'react';

import styles from './Tokens.module.scss';

const Tokens = () => {
  return (
    <div className={styles.tokensWrapper}>
      <div className={styles.tokensWrapper__token}>
        <p>$5</p>
      </div>
      <div className={styles.tokensWrapper__token}>
        <p>$10</p>
      </div>
      <div className={styles.tokensWrapper__token}>
        <p>$25</p>
      </div>
      <div className={styles.tokensWrapper__token}>
        <p>$100</p>
      </div>
    </div>
  );
}

export default Tokens;