import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import PlaylistFormContainer from './../playlist/playlist_form_container';


const collectionNav = () => (
  <div className="collection-nav">
    <ul className="collection-nav-links">
      <li key={1}><Link to={'/collection/playlists'}>PLAYLISTS</Link></li>
      <li key={2}><Link to={'/collection/tracks'}>SONGS</Link></li>
      <li key={3}><Link to={'/collection/albums'}>ALBUMS</Link></li>
      <li key={4}><Link to={'/collection/artists'}>ARTISTS</Link></li>
    </ul>
    <PlaylistFormContainer />
  </div>
);

export default collectionNav;