import React from 'react';
import PropTypes from 'prop-types';
import cat from '../images/cat1.png';
import style from '../styles/Card.module.css';

const Card = props => {
  const {
    clicked,
    handleMouseEnter,
    handleClick,
    mouseEntered,
    handleMouseLeave,
    mouseLeft,
    firstSelect,
    ingredient,
    portions,
    mice,
    clientSat,
  } = props;

  const borderStyle = clicked
    ? { border: '3.5px solid #e81c6a' }
    : { border: '3.5px solid #36b5d1' };

  const borderHoverStyle = {
    border: '3.5px solid #eb367a',
  };

  const labelHoverStyle = {
    backgroundColor: '#eb367a',
  };

  const labelStyle = clicked
    ? { backgroundColor: '#e81c6a' }
    : { backgroundColor: '#36b5d1' };

  return (
    <div
      className={`${style.card_item}`}
      style={
        clicked && mouseEntered && !mouseLeft && !firstSelect
          ? borderHoverStyle
          : borderStyle
      }
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
        <h3 className={style.ingredient}>
          с
          {ingredient}
        </h3>
        <p className={style.product_amount}>
          <span className={style.amount}>{portions}</span>
          {' '}
          порций
        </p>
        <p className={style.product_amount}>
          <span className={style.amount}>{mice}</span>
          {' '}
          мышь в подарок
        </p>
        <p className={style.product_amount}>
          <span className={style.amount}>{mice}</span>
          {' '}
          мышь в подарок
        </p>
        <p className={style.product_amount}>
          <span className={style.amount}>{clientSat}</span>
        </p>
      </div>
      <div className={style.image_container}>
        <img src={cat} alt="cat" className={style.cat_image} />
        <div
          className={style.weight}
          style={
            clicked && mouseEntered && !mouseLeft && !firstSelect
              ? labelHoverStyle
              : labelStyle
          }
        >
          <span className={style.weight_amount}>0,5</span>
          <span className={style.weight_degree}>кг</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  clicked: PropTypes.bool.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  mouseEntered: PropTypes.bool.isRequired,
  mouseLeft: PropTypes.bool.isRequired,
  firstSelect: PropTypes.bool.isRequired,
  ingredient: PropTypes.string.isRequired,
  portions: PropTypes.string.isRequired,
  mice: PropTypes.string.isRequired,
  clientSat: PropTypes.string.isRequired,
};

export default Card;
