import { connect } from 'react-redux';
import SongIndex from './../song/song_index';
import React from 'react';
import { fetchSongs } from './../../actions/song_actions';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';

class CollectionSongIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSongs()
    .then(() => this.props.setLoadingFalse())
  }

  componentWillUnmount() {
    this.props.setLoadingTrue();
  }

  render() {
    const { songs, loading } = this.props;

    if (loading) {
      return null;
    }

    return (
      <div className='collection-song-index'>
        <SongIndex songs={songs} indexType={'collection'}/>
      </div>
    )

  }
}

const msp = state => {
  return ({
    songs: Object.values(state.entities.songs),
    loading: state.ui.loading.status
  })
}

const mdp = dispatch => {
  return ({
    fetchSongs: () => dispatch(fetchSongs({ fetchType: 'collection' })),
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    setLoadingFalse: () => dispatch(setLoadingFalse())
  })
}

export default connect(msp, mdp)(CollectionSongIndex);