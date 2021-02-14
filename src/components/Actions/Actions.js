import React from 'react';

import styles from './Actions.module.scss';

const Actions = () => {
  return (
    <div className={styles.actionsWrapper}>
      <div className={styles.actionsWrapper__action}>
        <p>Hit</p>
      </div>
      <div className={styles.actionsWrapper__action}>
        <p>Stand</p>
      </div>
      <div className={styles.actionsWrapper__action}>
        <p>Double Down</p>
      </div>
    </div>
  );
}

export default Actions;