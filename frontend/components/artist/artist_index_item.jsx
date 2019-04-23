import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const artistIndexItem = ({ artist, history }) => {
  
  return (
    <li className='artist-index-item'>
      <img src={artist.image_url} alt={artist.name} />
      <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
    </li>
  );
}

export default withRouter(artistIndexItem);