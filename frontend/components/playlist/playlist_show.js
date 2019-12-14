import { connect } from 'react-redux';
import { fetchPlaylist } from './../../actions/playlist_actions';
import { setLoadingFalse, setLoadingTrue } from './../../actions/loading_actions';
import React from 'react';
import SongIndex from '../song/song_index';
import { followPlaylist, unfollowPlaylist } from "./../../util/playlist_api_util";
import { IconContext } from "react-icons";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { followed: false };
    this.followPlaylist = this.followPlaylist.bind(this);
    this.unfollowPlaylist = this.unfollowPlaylist.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchPlaylist(this.props.playlistId)
      .then(() => this.setState({ followed: this.props.playlist.followed }))
      .then(() => this.props.setLoadingFalse());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.playlistId !== prevProps.playlistId) {
      this.props.setLoadingTrue();
      this.props
        .fetchPlaylist(this.props.playlistId)
        .then(() => this.props.setLoadingFalse());
    }
  }

  componentWillUnmount() {
    this.props.setLoadingTrue();
  }

  followPlaylist() {
    // let id = this.props.playlist.id;
    this.props.followPlaylist(this.props.playlist.id).then(() => this.setState({ followed: true }));
  }

  unfollowPlaylist() {
    let id = this.props.playlist.id;
    this.props.unfollowPlaylist(id).then(() => this.setState({ followed: false }));
  }

  render() {
    const { songs, playlist, loading } = this.props;

    if (loading) {
      return null;
    }

    let playlistTitle = "";
    let playlistImage = "";
    let songIndex = "";
    let playlistInfo = "";
    // debugger
    if (playlist) {
      playlistTitle = (
        <span className="album-show-album-title">{playlist.title}</span>
      );
      songIndex = (
        <div className="album-show-songs">
          <SongIndex
            songs={songs}
            indexType="playlist"
            playlistId={playlist.id}
            playlistTitle={playlist.title}
            ownedPlaylist={playlist.userId == this.props.currentUserId}
          />
        </div>
      );
      playlistImage = (
        <div className="album-show-image">
          <img src={playlist.image_url} alt={playlist.title} />
        </div>
      );
      playlistInfo = (
        <span className="album-show-year">
          by {playlist.authorName} • {playlist.trackCount} SONGS
        </span>
      );
    }

    let button;
    if (this.props.currentUserId != this.props.playlist.userId) {
      if (!this.state.followed) {
        button = (
          <IconContext.Provider
            value={{ className: "playlist-follow-btn reacticon", size: "3em" }}
          >
            <IoMdHeartEmpty onClick={this.followPlaylist} />
          </IconContext.Provider>
        );
      } else {
        button = (
          <IconContext.Provider
            value={{ className: "playlist-follow-btn reacticon", size: "3em" }}
          >
            <IoMdHeart onClick={this.unfollowPlaylist} />
          </IconContext.Provider>
        );
      }
    }
    return (
      <div className="album-show">
        <div className="album-show-info">
          {playlistImage}
          <div className="album-show-details">
            {playlistTitle}
            {playlistInfo}
            {button}
          </div>
        </div>
        {songIndex}
      </div>
    );
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
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    setLoadingFalse: () => dispatch(setLoadingFalse()),
    followPlaylist: id => followPlaylist(id),
    unfollowPlaylist: id => unfollowPlaylist(id)
  };
};

export default connect(msp, mdp)(PlaylistShow);