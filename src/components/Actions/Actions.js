import React from 'react';

import styles from './Actions.module.scss';

const Actions = () => {
  return (
    <div className={styles.actionsWrapper}>
      <button className={styles.actionsWrapper__action}>Hit</button>
      <button className={styles.actionsWrapper__action}>Stand</button>
      <button className={styles.actionsWrapper__action}>Double Down</button>
    </div>
  );
}

export default Actions;