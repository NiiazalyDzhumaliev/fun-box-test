import { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import style from './styles/App.module.css';

const App = () => {
  const [borderColor, setBorderColor] = useState('#36b5d1');
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(prevState => !prevState);
    setBorderColor('#de43b4');
  };
  return (
    <div className={style.App}>
      <Header />
      <div className="container">
        <div className={`${style.card_container} row`}>
          <Card
            clicked={clicked}
            borderColor={borderColor}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
