import React from 'react';
import SongIndex from './../song/song_index';
import { connect } from 'react-redux';
import { fetchAlbum } from './../../actions/album_actions';
import { clearSongs } from './../../actions/song_actions';

class AlbumShow extends React.Component {

  componentDidMount() {
    // debugger;
    this.props.fetchAlbum(this.props.albumId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.albumId !== prevProps.albumId) {
      this.props.fetchAlbum(this.props.albumId);
    }
  }

  componentWillUnmount() {
    this.props.clearSongs();
  }

  render() {
    let album = '';
    if (this.props.album) {
      album = `${this.props.album.title} by ${this.props.album.artistName}`;
    }
    return (
      <div>
        {album}
        <SongIndex songs={this.props.songs} />
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  let albumId = ownProps.match.params.albumId;
  let album = state.entities.albums[albumId];
  let songs = Object.values(state.entities.songs);
  return ({
    albumId,
    album,
    songs
  })
}

const mdp = dispatch => {
  return ({
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    clearSongs: () => dispatch(clearSongs())
  })
}

export default connect(msp, mdp)(AlbumShow);