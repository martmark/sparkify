import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ArtistIndex from './../artist/artist_index';
import { fetchArtists } from './../../actions/artist_actions';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';
import React from 'react';

class CollectionArtistIndex extends React.Component {
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

    if (artists.length === 0) {
      return (
        <div className='no-collection-items'>
          <h1>Your artists will appear here</h1>
          <h3>Follow artists you love to add them to Your Library.</h3>
          <div className='button-holder'>
            <Link to='/browse/artists'>
              <button id="no-collection-button">DISCOVER</button>
            </Link>
          </div>
        </div>
      )
    }

    return (
      <div className='collection-artist-index'>
        <ArtistIndex artists={artists} />
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
    fetchArtists: () => dispatch(fetchArtists({ fetchType: 'collection' })),
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    setLoadingFalse: () => dispatch(setLoadingFalse())
  })
}

export default connect(msp, mdp)(CollectionArtistIndex);