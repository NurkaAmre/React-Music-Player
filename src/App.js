import React, {useState} from 'react';
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import './styles/app.module.css';
import data from './data'

function App() {
  //State
  const [ songs, setSongs ] = useState(data());
  const [ currentSong, setCurrentSong ] = useState(songs[6]);
  const [ isPlaying, setIsPlaying ] = useState(false);

  return (
    <div className="App">
     <Song currentSong={currentSong} />
     <Player isPlaying={isPlaying} 
            currentSong={currentSong}
            setIsPlaying={setIsPlaying} />
     <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
