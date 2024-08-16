import "./App.css";
import logo from './imgs/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src= {logo} alt="logo" />
        </div>
    

        <div className="descricao">
          <p>Localizada na histórica cidade de Igarassu-PE</p>
          <p>Café da manhã incluso</p>
          <p>Alugamos para day use</p>
          <p>Wifi Grátis</p>
          
        </div>
      </header>
    </div>
  );
}

export default App;
