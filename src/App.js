import { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import style from './styles/App.module.css';

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [mouseEntered, setMouseEntered] = useState(false);
  const [mouseLeft, setMouseLeft] = useState(true);
  const [firstSelect, setFirstSelect] = useState(false);

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
          <Card
            clicked={clicked}
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            mouseEntered={mouseEntered}
            mouseLeft={mouseLeft}
            firstSelect={firstSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
