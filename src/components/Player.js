import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
 } from "@fortawesome/free-solid-svg-icons";
 import s from '../styles/player.module.css'

const Player = ({currentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo }) => {
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
 
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    )
  }
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({...songInfo, currentTime: e.target.value})
  }

    return (
        <div className={s.player}>
          <div className={s.tcontrol}>
            <p>{getTime(songInfo.currentTime)}</p>
            <input 
            min={0} 
            max={songInfo.duration || 0} 
            value={songInfo.currentTime}
            onChange={dragHandler} 
            type="range" />
            <p>{getTime(songInfo.duration)}</p>
          </div>
          <div className={s.pcontrol}>
            <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
            <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
            <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
          </div>
        </div>
    )
}

export default Player;