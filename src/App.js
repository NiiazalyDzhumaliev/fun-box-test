import Header from './components/Header';
import CardList from './components/CardList';
import style from './styles/App.module.css';

const App = () => (
  <div className={style.App}>
    <Header />
    <CardList />
  </div>
);
export default App;
