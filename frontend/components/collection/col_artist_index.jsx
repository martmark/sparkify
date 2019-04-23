import { connect } from 'react-redux';
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
        <h1>Loading...</h1>
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