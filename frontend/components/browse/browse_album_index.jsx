import { connect } from 'react-redux';
import AlbumIndex from '../album/album_index';
import { fetchAlbums } from '../../actions/album_actions';
import { setLoadingTrue, setLoadingFalse } from '../../actions/loading_actions';
import React from 'react';

class BrowseAlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentDidMount() {
    this.props.fetchAlbums()
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
        let albums = this.props.albums.slice();
        let shuffledAlbums = shuffle(albums);
        this.setState({ albums: shuffledAlbums });
      })
      .then(() => this.props.setLoadingFalse());
  }

  componentWillUnmount() {
    this.props.setLoadingTrue();
  }

  render() {
    const { loading } = this.props;
    const albums = this.state.albums;

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

    return (
      <div className='browse-album-index'>
        <AlbumIndex albums={albums} />
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