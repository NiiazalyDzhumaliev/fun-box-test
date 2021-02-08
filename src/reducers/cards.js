import { v4 as uuidv4 } from 'uuid';

const SELECT_CARD = 'SELECT_CARD';
const ON_ENTER_CARD = 'ON_ENTER_CARD';
const ON_LEAVE_CARD = 'ON_LEAVE_CARD';
const ON_CHECKED = 'ON_CHECKED';

const initialState = {
  cards: [
    {
      id: uuidv4(),
      ingredient: 'c фуа-гра',
      portions: '10',
      mice: '',
      clientSat: '',
      description: 'Печень утки разварная с артишоками.',
      notInStock: 'Печалька, с фуа-гра закончился',
      clicked: false,
      mouseEntered: false,
      mouseLeft: true,
      firstSelect: false,
      isChecked: false,
    },

    {
      id: uuidv4(),
      ingredient: 'c рыбой',
      portions: '40',
      mice: '2',
      clientSat: '',
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      notInStock: 'Печалька, с рыбой закончился',
      clicked: false,
      mouseEntered: false,
      mouseLeft: true,
      firstSelect: false,
      isChecked: false,
    },
    {
      id: uuidv4(),
      ingredient: 'c курой',
      portions: '100',
      mice: '5',
      clientSat: 'заказчик доволен',
      description: 'Филе из цыплят с трюфелями в бульоне.',
      notInStock: 'Печалька, с курой закончился',
      clicked: false,
      mouseEntered: false,
      mouseLeft: true,
      firstSelect: false,
      isChecked: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CARD: {
      const callItem = id => {
        const newList = state.cards.map(item => {
          if (id === item.id) {
            const updItem = {
              ...item,
              clicked: !item.clicked,
              firstSelect: !item.clicked,
            };
            return updItem;
          }
          return item;
        });
        return newList;
      };
      return {
        ...state,
        cards: callItem(action.cardId),
      };
    }

    case ON_ENTER_CARD: {
      const callItem = id => {
        const newList = state.cards.map(item => {
          if (id === item.id) {
            const updItem = {
              ...item,
              mouseEntered: !item.mouseEntered,
              mouseLeft: !item.mouseLeft,
            };
            return updItem;
          }
          return item;
        });
        return newList;
      };
      return {
        ...state,
        cards: callItem(action.cardId),
      };
    }

    case ON_LEAVE_CARD: {
      const callItem = id => {
        const newList = state.cards.map(item => {
          if (id === item.id) {
            const updItem = {
              ...item,
              mouseLeft: !item.mouseLeft,
              mouseEntered: !item.mouseEntered,
              firstSelect: false,
            };
            return updItem;
          }
          return item;
        });
        return newList;
      };
      return {
        ...state,
        cards: callItem(action.cardId),
      };
    }

    case ON_CHECKED: {
      const callItem = id => {
        const newList = state.cards.map(item => {
          if (id === item.id) {
            const updItem = {
              ...item,
              isChecked: !item.isChecked,
            };
            return updItem;
          }
          return item;
        });
        return newList;
      };
      return {
        ...state,
        cards: callItem(action.cardId),
      };
    }
    default:
      return state;
  }
};

export default reducer;
