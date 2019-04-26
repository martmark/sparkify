import React from 'react';
import { NavLink } from 'react-router-dom';

class SearchNav extends React.Component {

  render() {
    return (
      <div className="collection-nav">
        <ul className="collection-nav-links content-nav-links">
          <li key={1}><NavLink activeClassName="content-link-active" to={'/search/tracks'}>SONGS</NavLink></li>
          <li key={2}><NavLink activeClassName="content-link-active" to={'/search/artists'}>ARTISTS</NavLink></li>
          <li key={3}><NavLink activeClassName="content-link-active" to={'/search/albums'}>ALBUMS</NavLink></li>
        </ul>
        
      </div>
    )
  }
};





export default SearchNav;