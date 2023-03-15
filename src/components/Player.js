import React, {useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlay,
  faAngleLeft,
  faAngleRight,
 } from "@fortawesome/free-solid-svg-icons";
 import s from '../styles/player.module.css'

const Player = ({currentSong, isPlaying, setIsPlaying }) => {
  //REF
  const audioRef = useRef(null)
  //Event Handlers
  const playSongHandler = () => {
    // console.log(audioRef.current)
    if (isPlaying){
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    }
    else {
      audioRef.current.play();
      setIsPlaying(!isPlaying)
    }  
  }
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration: duration})
    console.log(e.target)
  }
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    )
  }
  //STATE
  const [ songInfo, setSongInfo ] = useState ({
    currentTime: null,
    duration: null,
  })

    return (
        <div className={s.player}>
          <div className={s.tcontrol}>
            <p>{getTime(songInfo.currentTime)}</p>
            <input type="range" />
            <p>{getTime(songInfo.duration)}</p>
          </div>
          <div className={s.pcontrol}>
            <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
            <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} />
            <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
          </div>
          <audio 
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler} 
          ref={audioRef} 
          src={currentSong.audio}></audio>
        </div>
    )
}

export default Player;