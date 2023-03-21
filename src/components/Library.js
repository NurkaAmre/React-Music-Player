import React from 'react';
import LibrarySong from './LibrarySong';
import s from '../styles/library.module.css'

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
    return (
        <div className={s.library}>
            <h2>Library</h2>
            <div className={s.librarySongs}>
            {songs.map((song) => (
                <LibrarySong 
                setCurrentSong={setCurrentSong} 
                song={song} 
                songs={songs} 
                id={song.id}
                key={song.id} 
                audioRef={audioRef}
                isPlaying={isPlaying}/>
            ))}
            </div>
        </div>
    )
}

export default Library;