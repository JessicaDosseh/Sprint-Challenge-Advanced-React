import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PlayersList from './components/PlayersList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <PlayersList/>
      {/* <span className="greet">Womens World Cup</span> */}
    </div>
  );
}

export default App;
