import Header from './components/Header';
import Card from './components/Card';
import style from './styles/App.module.css';

const App = () => (
  <div className={style.App}>
    <Header />
    <div className={style.card_container}>
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default App;
