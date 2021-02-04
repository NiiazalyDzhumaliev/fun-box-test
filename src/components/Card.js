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
  } = props;

  const borderStyle = clicked
    ? { border: '3.5px solid #de43b4' }
    : { border: '3.5px solid #36b5d1' };

  const borderHoverStyle = {
    border: '3.5px solid #f582ae',
  };

  const labelHoverStyle = {
    backgroundColor: '#f582ae',
  };

  const labelStyle = clicked
    ? { backgroundColor: '#de43b4' }
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
        <h3 className={style.ingredient}>с фуа-гра</h3>
        <p className={style.product_amount}>
          <span className={style.amount}>10</span>
          {' '}
          порций
        </p>
        <p className={style.product_amount}>
          <span className={style.amount}>1</span>
          {' '}
          мышь в подарок
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
};

export default Card;
