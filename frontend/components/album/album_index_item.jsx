import React from 'react';
import { Link } from 'react-router-dom';

const albumIndexItem = ({ album }) => {
  return (
    <li className='album-index-item'>
      <div className='album-index-info'>
        <Link to={`/album/${album.id}`}>
          <div className='album-index-item-image'><img src={album.image_url} alt={album.title}/></div>
          <span className='album-index-item-title'>{album.title}</span>
        </Link>
      </div>
      <div className='album-index-item-artist'>
        <Link to={`/artist/${album.artistId}`}>{album.artistName}</Link>
      </div>
    </li>
  );
}

export default albumIndexItem;