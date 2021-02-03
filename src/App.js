import Header from './components/Header';
import style from './styles/App.module.css';

const App = () => (
  <div className={`${style.App} d-flex justify-content-center`}>
    <Header />
  </div>
);

export default App;
