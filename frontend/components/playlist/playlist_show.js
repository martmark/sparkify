import { connect } from 'react-redux';
import { fetchPlaylist } from './../../actions/playlist_actions';
import { setLoadingFalse, setLoadingTrue } from './../../actions/loading_actions';
import React from 'react';
import SongIndex from '../song/song_index';

class PlaylistShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { followed: false };
    if (this.props.playlist && this.props.playlist.followed) {
      this.state = { followed: true };
    } else {
      this.state = { followed: false };
    }
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId)
      .then(() => this.props.setLoadingFalse());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.playlistId !== prevProps.playlistId) {
      this.props.setLoadingTrue();
      this.props.fetchPlaylist(this.props.playlistId)
        .then(() => this.props.setLoadingFalse());
    }
  }

  componentWillUnmount() {
    this.props.setLoadingTrue();
  }

  render() {
    const { songs, playlist, loading } = this.props;

    if (loading) {
      return null;
    }


    
    let playlistTitle = '';
    let playlistImage = '';
    let songIndex = '';
    let playlistInfo = '';

    if (playlist) {
      playlistTitle = <span className='album-show-album-title'>{playlist.title}</span>
      songIndex = <div className='album-show-songs'><SongIndex songs={songs} indexType='playlist' /></div>
      playlistImage = <div className='album-show-image'><img src={playlist.image_url} alt={playlist.title} /></div>
      playlistInfo = <span className='album-show-year'>by {playlist.authorName} • {playlist.trackCount} SONGS</span>
    }
    return (
      <div className='album-show'>
        <div className='album-show-info'>
          {playlistImage}
          <div className='album-show-details'>
            {playlistTitle}
            {playlistInfo}
          </div>
        </div>
        {songIndex}
      </div>
    )
  }
}



const msp = (state, ownProps) => {
  let playlistId = ownProps.match.params.playlistId;
  let playlist = state.entities.playlists[playlistId];
  let songs = Object.values(state.entities.songs);
  let loading = state.ui.loading.status;
  let currentUserId = state.session.currentUserId;
  return({
    playlistId,
    playlist,
    songs,
    loading,
    currentUserId
  });
};

const mdp = dispatch => {
  return({
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    setLoadingFalse: () => dispatch(setLoadingFalse())
  });
};

export default connect(msp, mdp)(PlaylistShow);