import React from 'react';
import cat from '../images/cat1.png';
import style from '../styles/Card.module.css';

const Card = () => (
  <div>
    <div className={`${style.card_item}`}>
      <div>
        <p className="m-0">Сказочное заморское яство</p>
        <h1 className={style.product_name}>Нямушка</h1>
        <h3 className={style.ingredient}>с фуа-гра</h3>
        <p className="m-0">10 порций</p>
        <p className="m-0">мышь в подарок</p>
      </div>
      <div className={style.image_container}>
        <img src={cat} alt="cat" className={style.cat_image} />
        <div className={style.weight}>
          <span className={style.weight_amount}>0,5</span>
          <span className={style.weight_degree}>кг</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
