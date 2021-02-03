import React from 'react';
import cat from '../images/cat.png';
import style from '../styles/Card.module.css';

const Card = () => (
  <div>
    <div className={style.card_item}>
      <img src={cat} alt="cat" className={style.cat_image} />
    </div>
  </div>
);

export default Card;
