import React from 'react';
import cat from '../images/cat1.png';
import style from '../styles/Card.module.css';

const Card = () => (
  <div>
    <div className={`${style.card_item}`}>
      <img src={cat} alt="cat" className={style.cat_image} />
      <div className={style.weight}>
        <span>0,5</span>
        <span>кг</span>
      </div>
    </div>
  </div>
);

export default Card;
