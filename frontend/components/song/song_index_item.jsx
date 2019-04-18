import React from 'react';

const songIndexItem = ({ song }) => {
  return (
    <li className="song-index-item">
      <span className='song-title'>{song.title}</span>
      <span className='song-artist'>{song.artistName}</span>
      <span className='song-album'>{song.albumTitle}</span>
      <span className='song-duration'>{song.duration}</span>
    </li>
  );
}

export default songIndexItem;