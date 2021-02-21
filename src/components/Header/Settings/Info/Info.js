import React from 'react';
import styles from './Info.module.scss';

const Info = ({ handleShowInfo }) => {
  return (
    <div className={styles.info}>
      <h2 className={styles.info__header}>Information about Blackjack</h2>
      <button className={styles.info__close} name="close" onClick={handleShowInfo}>&times;</button>
    </div>
  )
}

export default Info;