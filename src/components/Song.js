import React from "react";
import s from '../styles/song.module.css'

const Song = ({currentSong}) => {
    return (
        <div className={s.container}>
        <img src={currentSong.cover}></img>
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
        </div>
    )
}

export default Song;