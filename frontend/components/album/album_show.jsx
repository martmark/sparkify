import React from 'react';
import SongIndex from './../song/song_index';
import { connect } from 'react-redux';
import { fetchAlbum } from './../../actions/album_actions';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';

class AlbumShow extends React.Component {

  componentDidMount() {
    // debugger;
    this.props.fetchAlbum(this.props.albumId).
    then(() => this.props.setLoadingFalse());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.albumId !== prevProps.albumId) {
      this.props.fetchAlbum(this.props.albumId);
    }
  }

  componentWillUnmount() {
    this.props.setLoadingTrue();
  }

  render() {
    const { songs, album, loading } = this.props;

    if (loading) {
      return (
        <h1>Loading...</h1>
      )
    }
    
    let albumInfo = '';
    let songIndex = '';

    if (album) {
      albumInfo = <h1>{album.title} by {album.artistName}</h1>;
      songIndex = <SongIndex songs={songs} />
    }
    return (
      <div>
        {albumInfo}
        {songIndex}
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  let albumId = ownProps.match.params.albumId;
  let album = state.entities.albums[albumId];
  let songs = Object.values(state.entities.songs);
  let loading = state.ui.loading.status;
  return ({
    albumId,
    album,
    songs,
    loading
  })
}

const mdp = dispatch => {
  return ({
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    setLoadingFalse: () => dispatch(setLoadingFalse()),
    setLoadingTrue: () => dispatch(setLoadingTrue())
  })
}

export default connect(msp, mdp)(AlbumShow);