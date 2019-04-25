import { connect } from 'react-redux';
import ArtistIndex from '../artist/artist_index';
import { fetchArtists } from '../../actions/artist_actions';
import { setLoadingTrue, setLoadingFalse } from '../../actions/loading_actions';
import React from 'react';

class BrowseArtistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchArtists()
    .then(() => this.props.setLoadingFalse());
  }

  componentWillUnmount() {
    this.props.setLoadingTrue();
  }

  render() {
    const { artists, loading } = this.props;

    if (loading) {
      return null;
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

    let browseArtists = shuffle(artists.slice());

    return (
      <div className='browse-artist-index'>
        <ArtistIndex artists={browseArtists} />
      </div>
    )

  }
}

const msp = state => {
  return ({
    artists: Object.values(state.entities.artists),
    loading: state.ui.loading.status
  })
}

const mdp = dispatch => {
  return ({
    fetchArtists: () => dispatch(fetchArtists({ fetchType: 'browse' })),
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    setLoadingFalse: () => dispatch(setLoadingFalse())
  })
}

export default connect(msp, mdp)(BrowseArtistIndex);