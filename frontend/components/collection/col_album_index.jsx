import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AlbumIndex from './../album/album_index';
import { fetchAlbums } from './../../actions/album_actions';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';
import React from 'react';

class CollectionAlbumIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums()
      .then(() => this.props.setLoadingFalse());
  }

  componentWillUnmount() {
    this.props.setLoadingTrue();
  }

  render() {
    const { albums, loading } = this.props;

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

    if (albums.length === 0) {
      return (
        <div className='no-collection-items'>
          <h1>Save your favorite albums</h1>
          <h3>Save albums you love to build the collection of your dreams.</h3>
          <div className='button-holder'>
            <Link to='/browse/albums'>
              <button id="no-collection-button">DISCOVER</button>
            </Link>
          </div>
        </div>
      )
    }

    return (
      <div className='collection-album-index'>
        <AlbumIndex albums={albums} />
      </div>
    )

  }
}

const msp = state => {
  return ({
    albums: Object.values(state.entities.albums),
    loading: state.ui.loading.status
  })
}

const mdp = dispatch => {
  return ({
    fetchAlbums: () => dispatch(fetchAlbums({ fetchType: 'collection' })),
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    setLoadingFalse: () => dispatch(setLoadingFalse())
  })
}

export default connect(msp, mdp)(CollectionAlbumIndex);