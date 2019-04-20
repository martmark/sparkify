import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import PlaylistFormContainer from './../playlist/playlist_form_container';
import { connect } from 'react-redux';
import { openModal } from './../../actions/modal_actions';

const mdp = dispatch => {
  return({
    openModal: () => dispatch(openModal({modalType: 'playlistForm'}))
  })
}


class collectionNav extends React.Component {

  render() {
    return(
      <div className="collection-nav">
        <ul className="collection-nav-links">
          <li key={1}><Link to={'/collection/playlists'}>PLAYLISTS</Link></li>
          <li key={2}><Link to={'/collection/tracks'}>SONGS</Link></li>
          <li key={3}><Link to={'/collection/albums'}>ALBUMS</Link></li>
          <li key={4}><Link to={'/collection/artists'}>ARTISTS</Link></li>
        </ul>
        <button onClick={this.props.openModal}>New Playlist</button>
      </div>
    )
  }
};

export default connect(null, mdp)(collectionNav);