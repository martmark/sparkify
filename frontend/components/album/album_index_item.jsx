import React from 'react';
import { Link } from 'react-router-dom';

const albumIndexItem = ({ album }) => {
  return (
    <li className='album-index-item'>
      <Link to={`/album/${album.id}`}>{album.title}</Link>
      <Link to={`/artist/${album.artistId}`}>{album.artistName}</Link>
    </li>
  );
}

export default albumIndexItem;