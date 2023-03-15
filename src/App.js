import React, {useState} from 'react';
import Song from './components/Song';
import Player from './components/Player';
import './styles/app.module.css';
import data from './data'

function App() {
  //State
  const [ songs, setSongs ] = useState(data());
  const [ currentSong, setCurrentSong ] = useState(songs[2]);
  const [ isPlaying, setIsPlaying ] = useState(false);

  return (
    <div className="App">
     <Song currentSong={currentSong} />
     <Player isPlaying={isPlaying} 
            currentSong={currentSong}
            setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;
