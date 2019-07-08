import React from 'react';
import SongIndex from './../song/song_index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbum } from './../../actions/album_actions';
import { followAlbum, unfollowAlbum } from './../../util/album_api_util';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';
import { setCurrentSong, setQueue } from './../../actions/music_actions';


class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { followed: false };
    if (this.props.album && this.props.album.followed) {
      this.state = { followed: true };
    } else {
      this.state = { followed: false };
    }
    this.followAlbum = this.followAlbum.bind(this);
    this.unfollowAlbum = this.unfollowAlbum.bind(this);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId)
      .then(() => this.setState({ followed: this.props.album.followed }))
      .then(() => this.props.setLoadingFalse());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.albumId !== prevProps.albumId) {
      this.props.fetchAlbum(this.props.albumId);
    }
  }

  componentWillUnmount() {
    this.props.setLoadingTrue();
  }

  followAlbum() {
    let id = this.props.album.id;
    this.props.followAlbum(id)
      .then(() => this.setState({ followed: true }));
  }

  unfollowAlbum() {
    let id = this.props.album.id;
    this.props.unfollowAlbum(id)
      .then(() => this.setState({ followed: false }));
  }

  render() {
    const { songs, album, loading } = this.props;

    if (loading) {
      return null;
    }
    
    let button = '';
    if (!this.state.followed) {
      button = <button onClick={this.followAlbum}>Follow Album</button>;
    } else {
      button = <button onClick={this.unfollowAlbum}>Unfollow Album</button>;
    }

    let albumArtistName = '';
    let albumTitle = '';
    let albumImage = '';
    let songIndex = '';
    let albumInfo = '';

    if (album) {
      albumArtistName = <span className='album-show-artist-name'><Link to={`/artist/${album.artistId}`}>{album.artistName}</Link></span>
      albumTitle = <span className='album-show-album-title'>{album.title}</span>
      songIndex = <div className='album-show-song-index'><SongIndex songs={songs} /></div>
      albumImage = <div className='album-show-image'><img src={album.image_url} alt={album.title} /></div>
      albumInfo = <span className='album-show-year'>{album.year} • {album.trackCount} SONGS • {button} </span>
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
        <div className='album-show-songs'>{songIndex}</div>
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
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    followAlbum: id => followAlbum(id),
    unfollowAlbum: id => unfollowAlbum(id),
    
  })
}

export default connect(msp, mdp)(AlbumShow);