import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const artistIndexItem = ({ artist, history }) => {
  
  return (
    <li className='artist-index-item'>
      <img src={artist.image_url} alt={artist.name} />
      <button onClick={(e) => {history.push(`/artist/${artist.id}`)}}>{artist.name}</button>
    </li>
  );
}

export default withRouter(artistIndexItem);