// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import PlayersList from './PlayersList';
import './App.css'; // You can add some global styles here if needed

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FIFA Player Cards</h1>
      </header>
      <PlayersList />
    </div>
  );
}

export default App;