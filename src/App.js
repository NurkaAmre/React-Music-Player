import React, {useState} from 'react';
import Song from './components/Song';
import Player from './components/Player';
import './styles/app.module.css';
import data from './data'

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong ] = useState(songs[0]);
  return (
    <div className="App">
     <Song currentSong={currentSong} />
     <Player />
    </div>
  );
}

export default App;
