import React from 'react';
import PropTypes from 'prop-types';
import cat from '../images/cat1.png';
import style from '../styles/Card.module.css';

const Card = props => {
  const {
    handleMouseEnter, handleClick, handleMouseLeave, cardObject,
  } = props;

  const miceSpell = amount => {
    switch (amount) {
      case '2': {
        return 'мыши в подарок';
      }
      case '5': {
        return 'мышей в подарок';
      }
      default:
        return 'мышь в подарок';
    }
  };

  const styleBorder = card => {
    if (
      card.clicked
      && card.mouseEntered
      && !card.mouseLeft
      && !card.firstSelect
    ) {
      return {
        border: '3.5px solid #eb367a',
      };
    }
    if (card.clicked) {
      return {
        border: '3.5px solid #e81c6a',
      };
    }
    return { border: '3.5px solid #36b5d1' };
  };

  const styleLabel = card => {
    if (
      card.clicked
      && card.mouseEntered
      && !card.mouseLeft
      && !card.firstSelect
    ) {
      return {
        backgroundColor: '#eb367a',
      };
    }

    if (cardObject.clicked) {
      return { backgroundColor: '#e81c6a' };
    }
    return { backgroundColor: '#36b5d1' };
  };

  return (
    <div
      className={`${style.card_item}`}
      style={styleBorder(cardObject)}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className={style.description_container}>
        <p className={style.product_description}>Сказочное заморское яство</p>
        <h1 className={style.product_name}>Нямушка</h1>
        <h3 className={style.ingredient}>{cardObject.ingredient}</h3>
        <p className={style.product_amount}>
          <span className={style.amount}>{cardObject.portions}</span>
          {' '}
          порций
        </p>
        <p className={style.product_amount}>
          <span className={style.amount}>{cardObject.mice}</span>
          {' '}
          {miceSpell(cardObject.mice)}
        </p>

        <p className={style.product_amount}>
          <span className={style.amount}>{cardObject.clientSat}</span>
        </p>
      </div>
      <div className={style.image_container}>
        <img src={cat} alt="cat" className={style.cat_image} />
        <div className={style.weight} style={styleLabel(cardObject)}>
          <span className={style.weight_amount}>0,5</span>
          <span className={style.weight_degree}>кг</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  cardObject: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Card;
