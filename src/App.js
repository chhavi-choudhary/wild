import './App.css';
import Header from './components/Header';
import GameList from './components/Gamelist';

function App() {
  return (
    <div className="App">
      <h1>Fetch data</h1>
      <Header title="Learn more of React!!"/>
      <GameList />
    </div>
  );
}

export default App;
