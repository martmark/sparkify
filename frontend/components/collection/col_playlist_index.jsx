import { connect } from 'react-redux';
import PlaylistIndex from './../playlist/playlist_index';
import { fetchPlaylists } from './../../actions/playlist_actions';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';
import { openModal } from './../../actions/modal_actions';
import React from 'react';

class CollectionPlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylists()
    .then(() => this.props.setLoadingFalse());
  }

  componentWillUnmount() {
    this.props.setLoadingTrue();
  }

  render() {
    const { playlists, loading } = this.props;
    
    if (loading) {
      return (
        <div className='spinner-outer'>
          <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
        </div>
      )
    }

    if (playlists.length === 0) {
      return (
        <div className='no-collection-items'>
          <h1>Create your first playlist</h1>
          <h3>We'll help you make the perfect mixtape, minus the tape.</h3>
          <div className='button-holder'>
            <button id="no-collection-button" onClick={this.props.openModal}>NEW PLAYLIST</button>
          </div>
        </div>
      )
    }

    return (
      <div className='collection-playlist-index'>
        <PlaylistIndex playlists={playlists} />
      </div>
    )
  }
}

const msp = state => {
  return({
    playlists: Object.values(state.entities.playlists),
    loading: state.ui.loading.status
  })
}

const mdp = dispatch => {
  return({
    fetchPlaylists: () => dispatch(fetchPlaylists({ fetchType: 'collection' })),
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    setLoadingFalse: () => dispatch(setLoadingFalse()),
    openModal: () => dispatch(openModal({ modalType: 'playlistForm' }))
  })
}

export default connect(msp, mdp)(CollectionPlaylistIndex);