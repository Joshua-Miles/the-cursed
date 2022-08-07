import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ fontWeight: 'bold', fontFamily: 'fantasy', fontSize: '2em', marginBottom: 0}}>
         The Cursed
        </h1>
        <a href="https://www.thecursed.games" style={{ color: 'white ', fontFamily: 'fantasy', opacity: 0.5}}>
          https://www.thecursed.games
        </a>
      </header>
    </div>
  );
}

export default App;
