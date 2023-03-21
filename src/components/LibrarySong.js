import React from "react";
import s from '../styles/library.module.css'

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying }) => {
    const songSelectHandler = () => {
        setCurrentSong(song)
        if(isPlaying) {
            const playPromise = audioRef.current.play();
            playPromise.then((audio) => {
                audioRef.current.play()
            })
        }
    }
    return (
        <div onClick={songSelectHandler} className={s.librarySong}>
        <img alt={song.name} src={song.cover}></img>
        <div className={s.songDescription}>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        </div>
        </div>
    )
}

export default LibrarySong;