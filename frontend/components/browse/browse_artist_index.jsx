import { connect } from 'react-redux';
import ArtistIndex from '../artist/artist_index';
import { fetchArtists } from '../../actions/artist_actions';
import { setLoadingTrue, setLoadingFalse } from '../../actions/loading_actions';
import React from 'react';

class BrowseArtistIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { artists: [] };
  }

  componentDidMount() {
    this.props.fetchArtists()
    .then(() => {
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
      let shuffledArtists = shuffle(this.props.artists.slice());
      this.setState({ artists: shuffledArtists });
    })
    .then(() => this.props.setLoadingFalse());
  }

  componentWillUnmount() {
    this.props.setLoadingTrue();
  }

  render() {
    const { loading } = this.props;

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

    let browseArtists = this.state.artists;

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