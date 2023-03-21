import React, {useState, useRef} from 'react';
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import './styles/app.module.css';
import data from './data';
import Nav from './components/Nav';

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[6]);
  const [isPlaying, setIsPlaying] = useState(false);
   const [songInfo, setSongInfo] = useState({
     currentTime: 0,
     duration: 0,
   });
  //REF
  const audioRef = useRef(null);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  return (
    <div className="App">
      <Nav />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library songs={songs} 
               setCurrentSong={setCurrentSong}
               audioRef={audioRef} 
               isPlaying={isPlaying} />
      <audio 
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler} 
          ref={audioRef} 
          src={currentSong.audio}>
      </audio>
    </div>
  );
}

export default App;
