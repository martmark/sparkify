import { connect } from 'react-redux';
import PlaylistIndex from './../playlist/playlist_index';
import { fetchPlaylists } from './../../actions/playlist_actions';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';
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
      return null;
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
    setLoadingFalse: () => dispatch(setLoadingFalse())
  })
}

export default connect(msp, mdp)(CollectionPlaylistIndex);