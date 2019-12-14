import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from './../../actions/album_actions';
import AlbumIndex from './../album/album_index';

class AlbumSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbums({ fetchType: 'search', searchTerm: this.props.searchTerm })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.props.fetchAlbums({ fetchType: 'search', searchTerm: this.props.searchTerm })
    }
  }

  render() {
    if (!this.props.searchTerm) return null;
    if (this.props.albums.length > 0) {
      return (
        <div className='search-album-index'>
          <AlbumIndex albums={this.props.albums} />
        </div>
      )
    } else {
      return (
        <div className="noresults-outer">
          <h2 className="noresults">No results</h2>
        </div>
      );
    }
  }
}

const msp = state => {
  return ({
    albums: Object.values(state.entities.albums)
  });
};

const mdp = dispatch => {
  return ({
    fetchAlbums: fetchType => dispatch(fetchAlbums(fetchType)),
  });
};

export default connect(msp, mdp)(AlbumSearch);