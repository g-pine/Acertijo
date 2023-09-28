import logo from './logo.svg';
import Titulo from './components/Titulo';
import Juego from './components/Juego';
import './App.css';

function App() {
  return (
    <div className="App">
      <Titulo/>
      <Juego limite='10'/>
    </div>
  );
}

export default App;
