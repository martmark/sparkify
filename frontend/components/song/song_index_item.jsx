import React from 'react';
import { Link } from 'react-router-dom';

const songIndexItem = ({ song }) => {
  return (
    <li className="song-index-item">
      <div className='song-title-info'> 
        <span className='song-title'>{song.title}</span>
        <span className='song-duration'>{song.duration}</span>
      </div>
      <div className='song-artist-info'>
        <span className='song-artist'>{song.artistName}</span>
        <span className='song-album'><Link to={`/album/${song.albumId}`}>{song.albumTitle}</Link></span>
      </div>
    </li>
  );
}

export default songIndexItem;