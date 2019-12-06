import { connect } from 'react-redux';
import SongIndex from '../song/song_index';
import React from 'react';
import { fetchSongs } from '../../actions/song_actions';
import { setLoadingTrue, setLoadingFalse } from '../../actions/loading_actions';

class BrowseSongIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSongs()
    .then(() => this.props.setLoadingFalse());
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

    var shuffle = function (array) {
      var currentIndex = array.length;
      var temporaryValue, randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    let browseSongs = shuffle(songs.slice());

    return (
      <div className='browse-song-index'>
        <SongIndex songs={browseSongs} indexType={'browse'}/>
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
    fetchSongs: () => dispatch(fetchSongs({ fetchType: 'browse' })),
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    setLoadingFalse: () => dispatch(setLoadingFalse())
  })
}

export default connect(msp, mdp)(BrowseSongIndex);