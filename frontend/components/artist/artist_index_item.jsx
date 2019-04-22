import React from 'react';
import { Link } from 'react-router-dom';

const artistIndexItem = ({ artist }) => {
  return (
    <li className='artist-index-item'>
      <img src={artist.image_url} alt={artist.name} />
      <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
    </li>
  );
}

export default artistIndexItem;