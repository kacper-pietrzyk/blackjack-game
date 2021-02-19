import React from 'react';
import styles from './CardPicture.module.scss';

const CardPicture = ({ src }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={src} alt="card"></img>
    </div>
  );
}

export default CardPicture;