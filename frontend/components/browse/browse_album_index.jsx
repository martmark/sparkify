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

    let browseAlbums = shuffle(albums.slice());

    if (loading) {
      return (
        <div className='spinner-outer'>
          <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
          </div>
        </div>
      )
    }

    return (
      <div className='browse-album-index'>
        <AlbumIndex albums={browseAlbums} />
      </div>
    );
  };
};

const msp = state => {
  return ({
    albums: Object.values(state.entities.albums),
    loading: state.ui.loading.status
  });
};

const mdp = dispatch => {
  return ({
    fetchAlbums: () => dispatch(fetchAlbums({ fetchType: 'browse' })),
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    setLoadingFalse: () => dispatch(setLoadingFalse())
  });
};

export default connect(msp, mdp)(BrowseAlbumIndex);