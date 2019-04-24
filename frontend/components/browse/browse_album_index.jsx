import { connect } from 'react-redux';
import AlbumIndex from '../album/album_index';
import { fetchAlbums } from '../../actions/album_actions';
import { setLoadingTrue, setLoadingFalse } from '../../actions/loading_actions';
import React from 'react';

class BrowseAlbumIndex extends React.Component {
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
        <h1>Loading...</h1>
      )
    }

    return (
      <div className='browse-album-index'>
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
    fetchAlbums: () => dispatch(fetchAlbums({ fetchType: 'browse' })),
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    setLoadingFalse: () => dispatch(setLoadingFalse())
  })
}

export default connect(msp, mdp)(BrowseAlbumIndex);