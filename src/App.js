import Header from './components/Header';
import Card from './components/Card';
import style from './styles/App.module.css';

const App = () => (
  <div className={`${style.App} d-flex flex-column align-items-center`}>
    <Header />
    <div className="d-flex">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default App;
