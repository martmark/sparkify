import React from 'react';
import SongIndex from './../song/song_index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbum } from './../../actions/album_actions';
import { followAlbum, unfollowAlbum } from './../../util/album_api_util';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';
import { setCurrentSong, setQueue } from './../../actions/music_actions';
import { IconContext } from "react-icons";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";


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
      .then(() => {
        this.props.setLoadingFalse();
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.albumId !== prevProps.albumId) {
      this.props.setLoadingTrue();
      this.props.fetchAlbum(this.props.albumId)
        .then(() => this.setState({ followed: this.props.album.followed }))
        .then(() => this.props.setLoadingFalse());
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
      return (
        <div className='spinner-outer-2'>
          <div className='spinner-outer'>
            <div className="spinner">
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>
          </div>
        </div>
      )
    }
    
    let button = '';
    if (!this.state.followed) {
      button = (
        <IconContext.Provider value={{ className: "custom-icon reacticon", size: '3em' }}>
          <IoMdHeartEmpty onClick={this.followAlbum} />
        </IconContext.Provider>
      );
    } else {
      button = (
        <IconContext.Provider
          value={{ className: "heart-icon reacticon", size: "3em" }}
        >
          <IoMdHeart onClick={this.unfollowAlbum} />
        </IconContext.Provider>
      );
    }

    let albumArtistName = '';
    let albumTitle = '';
    let albumImage = '';
    let songIndex = '';
    let albumInfo = '';

    if (album) {
      albumArtistName = <span className='album-show-artist-name'><Link to={`/artist/${album.artistId}`}>{album.artistName}</Link></span>
      albumTitle = <span className='album-show-album-title'>{album.title}</span>
      songIndex = <div className='album-show-song-index'><SongIndex songs={songs} indexType="album" queueName={album.title} /></div>
      albumImage = <div className='album-show-image'><img src={album.image_url} alt={album.title} /></div>
      albumInfo = <span className='album-show-year'>{album.year} • {album.trackCount} SONGS</span>
    }
    return (
      <div className='album-show'>
        {/* <div className='album-show-info-outer'> */}
          <div className='album-show-info'>
            {albumImage}
            <div className='album-show-details'>
              {albumTitle}
              {albumArtistName}
              {albumInfo}
              <div className='album-show-follow-btn'>
                {button}
              </div>
            </div>
          {/* </div> */}
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