import React from 'react';
import { Link } from 'react-router-dom';

const playlistIndexItem = ({ playlist }) => {
  return(
    <li className="playlist-index-item">
      <Link to={`/playlist/${playlist.id}`}>{playlist.title}</Link> by {playlist.authorName}
    </li>
  )
}

export default playlistIndexItem;