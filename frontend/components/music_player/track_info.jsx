import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const TrackInfo = ({
  albumId,
  albumTitle,
  albumArt,
  artistId,
  artistName,
  songTitle,
  trackUrl
}) => (
  <div className="music-player-song-info">
    <div className="music-player-album-image">{(albumArt ? (
      <Link to={`/album/${albumId}`}>
        <img src={albumArt} alt={albumTitle} />
      </Link>
    ) : (
      <img src='https://sparkifyimages.s3.amazonaws.com/blank.jpg' alt='' />
    ))}</div>
    <div className="music-player-text-info">
      <span className="mp-track-title">
        <Link to={`/album/${albumId}`}>{songTitle}</Link>
      </span>
      <span className="mp-artist-name">
        <Link to={`/artist/${artistId}`}>{artistName}</Link>
      </span>
    </div>
  </div>
);

export { TrackInfo as default };
