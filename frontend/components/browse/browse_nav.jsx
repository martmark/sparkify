import React from 'react';
import { NavLink } from 'react-router-dom';

class browseNav extends React.Component {

  render() {
    return(
      <div className="browse-nav">
        <ul className="browse-nav-links content-nav-links">
          <li key={1}><NavLink activeClassName="content-link-active" to={'/browse/playlists'}>PLAYLISTS</NavLink></li>
          <li key={3}><NavLink activeClassName="content-link-active" to={'/browse/albums'}>ALBUMS</NavLink></li>
          <li key={4}><NavLink activeClassName="content-link-active" to={'/browse/artists'}>ARTISTS</NavLink></li>
        </ul>
      </div>
    )
  }
};

export default browseNav;