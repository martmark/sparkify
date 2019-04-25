import { connect } from 'react-redux';
import { fetchPlaylist } from './../../actions/playlist_actions';
import { setLoadingFalse, setLoadingTrue } from './../../actions/loading_actions';
import React from 'react';
import SongIndex from '../song/song_index';

class PlaylistShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId)
    .then(() => this.props.setLoadingFalse());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.playlistId !== prevProps.playlistId) {
      this.props.fetchPlaylist(this.props.playlistId);
    }
  }

  componentWillUnmount() {
    this.props.setLoadingTrue();
  }

  render() {
    const { playlist, songs, loading } = this.props;

    if (loading) {
      return(
        <h1>Loading...</h1>
      )
    }

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
        <SongIndex songs={this.props.songs} indexType={'playlist'}/>
      </div>
    )
  }
}



const msp = (state, ownProps) => {
  let playlistId = ownProps.match.params.playlistId;
  let playlist = state.entities.playlists[playlistId];
  let songs = Object.values(state.entities.songs);
  let loading = state.ui.loading.status;
  return({
    playlistId,
    playlist,
    songs,
    loading
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