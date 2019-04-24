import React from 'react';
import SongIndex from './../song/song_index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbum } from './../../actions/album_actions';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';

class AlbumShow extends React.Component {

  componentDidMount() {
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
    
    let albumArtistName = '';
    let albumTitle = '';
    let albumImage = '';
    let songIndex = '';
    let albumInfo = '';

    if (album) {
      albumArtistName = <span className='album-show-artist-name'>by <Link to={`/artist/${album.artistId}`}>{album.artistName}</Link></span>
      albumTitle = <span className='album-show-album-title'>{album.title}</span>
      songIndex = <div className='album-show-song-index'><SongIndex songs={songs} /></div>
      albumImage = <div className='album-show-image'><img src={album.image_url} alt={album.title} /></div>
      albumInfo = <span className='album-show-year'>{album.year} • {album.trackCount} SONGS</span>
    }
    return (
      <div className='album-show'>
        <div className='album-show-info'>
          {albumImage}
          <div className='album-show-details'>
            {albumTitle}
            {albumArtistName}
            {albumInfo}
          </div>
        </div>
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