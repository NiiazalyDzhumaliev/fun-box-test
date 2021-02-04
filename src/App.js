import { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import style from './styles/App.module.css';

const { uuid } = require('uuidv4');

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [mouseEntered, setMouseEntered] = useState(false);
  const [mouseLeft, setMouseLeft] = useState(true);
  const [firstSelect, setFirstSelect] = useState(false);

  const cardInfo = [
    {
      id: uuid(),
      ingredient: 'фуа-гра',
      portions: '10',
      mice: '',
      clientSat: '',
    },

    {
      id: uuid(),
      ingredient: 'рыбой',
      portions: '40',
      mice: '2',
      clientSat: '',
    },
    {
      id: uuid(),
      ingredient: 'курой',
      portions: '100',
      mice: '5',
      clientSat: 'заказчик доволен',
    },
  ];

  const handleMouseEnter = () => {
    setMouseEntered(prevState => !prevState);
    setMouseLeft(prevState => !prevState);
  };

  const handleMouseLeave = () => {
    setMouseLeft(prevState => !prevState);
    setMouseEntered(prevState => !prevState);
    setFirstSelect(false);
  };

  const handleClick = () => {
    setClicked(prevState => !prevState);
    setFirstSelect(prevState => !prevState);
  };
  return (
    <div className={style.App}>
      <Header />
      <div className="container">
        <div className={`${style.card_container} row`}>
          {cardInfo.map(info => (
            <Card
              clicked={clicked}
              handleClick={handleClick}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              mouseEntered={mouseEntered}
              mouseLeft={mouseLeft}
              firstSelect={firstSelect}
              ingredient={info.ingredient}
              portions={info.portions}
              mice={info.mice}
              clientSat={info.clientSat}
              key={info.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
