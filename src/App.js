import { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import style from './styles/App.module.css';

const App = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(prevState => !prevState);
  };
  return (
    <div className={style.App}>
      <Header />
      <div className="container">
        <div className={`${style.card_container} row`}>
          <Card clicked={clicked} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
