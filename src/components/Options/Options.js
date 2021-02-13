import React from 'react';

import styles from './Options.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faFolderOpen, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const Options = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faSave} className={styles.option} />
      <FontAwesomeIcon icon={faFolderOpen} className={styles.option} />
      <FontAwesomeIcon icon={faSyncAlt} className={styles.option} />
    </div>
  );
}

export default Options;