import React from 'react';
import { Link } from 'react-router-dom';

const playlistIndexItem = ({ playlist }) => {
  return(
    <li className="playlist-index-item">
      <div className='playlist-index-item-image'>
        <Link to={`/playlist/${playlist.id}`}><img src={playlist.image_url} alt={playlist.title}/></Link>
      </div>
      <div className='playlist-index-item-info'>
        <h2><Link to={`/playlist/${playlist.id}`}>{playlist.title}</Link></h2>
        <h4>by {playlist.authorName}</h4>
      </div>
    </li>
  )
}

export default playlistIndexItem;