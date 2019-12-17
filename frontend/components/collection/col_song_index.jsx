import { connect } from 'react-redux';
import SongIndex from './../song/song_index';
import { Link } from 'react-router-dom';
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

    if (songs.length === 0) {
      return (
        <div className='no-collection-items'>
          <h1>Songs you’ve liked live here</h1>
          <h3>Find more of the songs you love and save to your Liked Songs.</h3>
          <div className='button-holder'>
            <Link to='/browse'>
              <button id="no-collection-button">DISCOVER</button>
            </Link>
          </div>
        </div>
      )
    }

    return (
      <div className='collection-song-index'>
        <SongIndex songs={songs} indexType={'collection'} queueName={'Your Saved Songs'}/>
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