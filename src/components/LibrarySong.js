import React from "react";
import s from '../styles/library.module.css'

const LibrarySong = ({ song}) => {
    return (
        <div className={s.librarySong}>
        <img alt={song.name} src={song.cover}></img>
        <div className={s.songDescription}>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        </div>
        </div>
    )
}

export default LibrarySong;