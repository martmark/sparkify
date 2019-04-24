import { connect } from 'react-redux';
import PlaylistIndex from '../playlist/playlist_index';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { setLoadingTrue, setLoadingFalse } from '../../actions/loading_actions';
import React from 'react';

class BrowsePlaylistIndex extends React.Component {
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
        <h1>Loading...</h1>
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

    let browsePlaylists = shuffle(playlists.slice());
   
    return (
      <div className='browse-playlist-index'>
        <PlaylistIndex playlists={browsePlaylists} />
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
    fetchPlaylists: () => dispatch(fetchPlaylists({ fetchType: 'browse' })),
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    setLoadingFalse: () => dispatch(setLoadingFalse())
  })
}

export default connect(msp, mdp)(BrowsePlaylistIndex);