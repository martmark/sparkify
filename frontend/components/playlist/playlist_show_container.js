import { connect } from 'react-redux';
import { fetchPlaylist } from './../../actions/playlist_actions';
import { clearSongs } from './../../actions/song_actions';
import React from 'react';
import SongIndex from './../song/song_index';

class PlaylistShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.playlistId !== prevProps.playlistId) {
      this.props.fetchPlaylist(this.props.playlistId);
    }
  }

  componentWillUnmount() {
    this.props.clearSongs();
  }

  render() {
    let title = '';
    let authorName = '';
    let trackCount = '';
    if (this.props.playlist) {
      title = this.props.playlist.title;
      authorName = this.props.playlist.authorName;
      trackCount = `${this.props.playlist.trackCount} SONGS`;
    }
    return (
      <div className='playlist-show'>
        <section className='playlist-header'>
          <h1>{title}</h1>
          <h2>{authorName}</h2>
          <h3>{trackCount}</h3>
        </section>
        <SongIndex songs={this.props.songs} />
      </div>
    )
  }
}



const msp = (state, ownProps) => {
  let playlistId = ownProps.match.params.playlistId;
  let playlist = state.entities.playlists[playlistId];
  let songs = Object.values(state.entities.songs);
  return({
    playlistId,
    playlist,
    songs
  })
}

const mdp = dispatch => {
  return({
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    clearSongs: () => dispatch(clearSongs())
  })
}

export default connect(msp, mdp)(PlaylistShow);