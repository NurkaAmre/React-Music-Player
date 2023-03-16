import React from 'react';
import LibrarySong from './LibrarySong';
import s from '../styles/library.module.css'

const Library = ({songs}) => {
    return (
        <div className={s.library}>
            <h2>Library</h2>
            <div className={s.librarySongs}>
            {songs.map((song) => (
                <LibrarySong song={song} />
            ))}
            </div>
        </div>
    )
}

export default Library;