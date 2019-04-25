import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from './../../actions/modal_actions';

class collectionNav extends React.Component {

  render() {
    return(
      <div className="collection-nav">
        <ul className="collection-nav-links content-nav-links">
          <li key={1}><NavLink activeClassName="content-link-active" to={'/collection/playlists'}>PLAYLISTS</NavLink></li>
          <li key={2}><NavLink activeClassName="content-link-active" to={'/collection/tracks'}>FAVORITE SONGS</NavLink></li>
          <li key={3}><NavLink activeClassName="content-link-active" to={'/collection/albums'}>ALBUMS</NavLink></li>
          <li key={4}><NavLink activeClassName="content-link-active" to={'/collection/artists'}>ARTISTS</NavLink></li>
        </ul>
        <button id="new-playlist-button" onClick={this.props.openModal}>NEW PLAYLIST</button>
      </div>
    )
  }
};



const mdp = dispatch => {
  return ({
    openModal: () => dispatch(openModal({ modalType: 'playlistForm' }))
  });
};

export default connect(null, mdp)(collectionNav);