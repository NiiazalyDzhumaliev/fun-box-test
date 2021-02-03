import Header from './components/Header';
import Card from './components/Card';
import style from './styles/App.module.css';

const App = () => (
  <div className={style.App}>
    <Header />
    <div className="container">
      <div className={`${style.card_container} row`}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
);

export default App;
