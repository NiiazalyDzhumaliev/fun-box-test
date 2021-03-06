import React from 'react';
import PropTypes from 'prop-types';
import cat from '../images/cat1.png';
import style from '../styles/Card.module.css';

const Card = props => {
  const {
    handleMouseEnter,
    handleClick,
    handleMouseLeave,
    handleCheckbox,
    cardObject,
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

  const setTitle = card => {
    if (card.isChecked) {
      return 'Сказочное заморское яство';
    }
    if (
      card.clicked
      && card.mouseEntered
      && !card.mouseLeft
      && !card.firstSelect
    ) {
      return 'Коте не одобряет?';
    }
    return 'Сказочное заморское яство';
  };

  const setActionText = card => {
    if (card.isChecked) {
      return card.notInStock;
    }
    if (card.clicked) {
      return card.description;
    }
    return 'Чего сидишь? Порадуй котэ,';
  };

  const styleBorder = card => {
    if (card.isChecked) {
      return {
        border: '3.5px solid gray',
      };
    }
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
    if (!card.clicked && card.mouseEntered) {
      return {
        border: '3.5px solid #36b5d1',
      };
    }

    return { border: '3.5px solid #339eb5' };
  };

  const styleLabel = card => {
    if (card.isChecked) {
      return {
        backgroundColor: 'gray',
        opacity: '0.5',
      };
    }
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
    if (card.clicked) {
      return { backgroundColor: '#e81c6a' };
    }
    if (!card.clicked && card.mouseEntered) {
      return {
        backgroundColor: '#36b5d1',
      };
    }
    return { backgroundColor: '#339eb5' };
  };

  const styleTitle = card => {
    if (card.isChecked) {
      return { color: 'gray' };
    }
    if (
      card.clicked
      && card.mouseEntered
      && !card.mouseLeft
      && !card.firstSelect
    ) {
      return { color: '#eb367a' };
    }
    return { color: 'gray' };
  };

  const styleImage = card => {
    if (card.isChecked) {
      return {
        filter: 'opacity(50%)',
      };
    }
    return { filter: 'opacity(100%)' };
  };

  const disableText = card => {
    if (card.isChecked) {
      return { color: 'gray' };
    }
    return { color: 'black' };
  };

  const removeBuyBtn = card => {
    if (card.isChecked || card.clicked) {
      return { display: 'none' };
    }
    return { display: 'inline-block' };
  };

  return (
    <div className={style.card_container}>
      <div className={style.corner} style={styleBorder(cardObject)} />
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
          <p
            className={style.product_description}
            style={styleTitle(cardObject)}
          >
            {setTitle(cardObject)}
          </p>
          <h1 className={style.product_name} style={disableText(cardObject)}>
            Нямушка
          </h1>
          <h3 className={style.ingredient} style={disableText(cardObject)}>
            {cardObject.ingredient}
          </h3>
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
          <img
            src={cat}
            alt="cat"
            className={style.cat_image}
            style={styleImage(cardObject)}
          />
          <div className={style.weight} style={styleLabel(cardObject)}>
            <span className={style.weight_amount}>{cardObject.weight}</span>
            <span className={style.weight_degree}>кг</span>
          </div>
        </div>
      </div>
      <p className={style.call_to_action}>
        {setActionText(cardObject)}
        <button
          type="button"
          className={style.call_to_action_button}
          onClick={handleClick}
          style={removeBuyBtn(cardObject)}
        >
          купи
        </button>
      </p>
      <div className={style.toggle_switch}>
        <button
          type="button"
          onClick={handleCheckbox}
          className={style.make_available_btn}
        >
          {cardObject.isChecked ? 'Сделать доступным' : 'Сделать недоступным'}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  cardObject: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Card;
