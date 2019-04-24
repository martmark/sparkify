import React from 'react';
import { Link } from 'react-router-dom';

class browseNav extends React.Component {

  render() {
    return(
      <div className="browse-nav">
        <ul className="browse-nav-links">
          <li key={1}><Link to={'/browse/playlists'}>PLAYLISTS</Link></li>
          <li key={4}><Link to={'/browse/artists'}>ARTISTS</Link></li>
          <li key={2}><Link to={'/browse/tracks'}>SONGS</Link></li>
          <li key={3}><Link to={'/browse/albums'}>ALBUMS</Link></li>
        </ul>
      </div>
    )
  }
};

export default browseNav;