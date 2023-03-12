import React from 'react';
import Song from './components/Song';
import Player from './components/Player';
import './styles/app.module.css'

function App() {
  return (
    <div className="App">
     <Song />
     <Player />
    </div>
  );
}

export default App;
