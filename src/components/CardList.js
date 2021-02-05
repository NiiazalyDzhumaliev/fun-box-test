import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SELECT_CARD, ON_ENTER_CARD, ON_LEAVE_CARD } from '../actions';
import Card from './Card';
import style from '../styles/CardList.module.css';

const CardList = props => {
  const {
    cards, onSelectCard, onEnterCard, onLeaveCard,
  } = props;

  const handleClick = cardId => {
    onSelectCard(cardId);
  };

  const handleMouseEnter = cardId => {
    onEnterCard(cardId);
  };

  const handleMouseLeave = cardId => {
    onLeaveCard(cardId);
  };

  return (
    <div className="container">
      <div className={`${style.card_container} row`}>
        {cards.map(card => (
          <Card
            cardObject={card}
            key={card.id}
            handleClick={() => handleClick(card.id)}
            handleMouseEnter={() => handleMouseEnter(card.id)}
            handleMouseLeave={() => handleMouseLeave(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cards: state.cards,
});

const mapDispatchTProps = dispatch => ({
  onSelectCard: cardId => dispatch(SELECT_CARD(cardId)),
  onEnterCard: cardId => dispatch(ON_ENTER_CARD(cardId)),
  onLeaveCard: cardId => dispatch(ON_LEAVE_CARD(cardId)),
});

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectCard: PropTypes.func.isRequired,
  onEnterCard: PropTypes.func.isRequired,
  onLeaveCard: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchTProps)(CardList);
