import { connect } from 'react-redux';
import { fetchPlaylists } from './../../actions/playlist_actions';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';
import { addPlaylistSong } from './../../util/playlist_song_api_util';
import React from 'react';

class AddSongToPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylists()
      .then(() => this.setState({ loading: false }));
  }

  handleClick(playlistId) {
    return e => {
      this.props.addPlaylistSong({ playlistId: playlistId, songId: this.props.songId })
        .then(() => this.props.closePlaylistModal());
    }
  }

  render() {
    const { playlists } = this.props;

    if (this.state.loading) {
      return (
        <div className='spinner-outer'>
          <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
        </div>
      )
    }

    let playlistLis = playlists.map(playlist => {
      return (
        <li key={playlist.id} className='addsong-idx-item' onClick={this.handleClick(playlist.id)}>
          <img className='addsong-idx-img' src={playlist.image_url} alt={playlist.title}/>
          <span className='addsong-idx-title'>{playlist.title}</span>
        </li>
      )
    })

    return (
      <div className="modal-bg" onClick={this.props.closePlaylistModal}>
        <div className="modal-inner" onClick={e => e.stopPropagation()}>
          <ul className='addsong-idx'>
            {playlistLis}
          </ul>
        </div>
      </div>
    )

  }
}

const msp = state => {
  return ({
    playlists: Object.values(state.entities.playlists),
    loading: state.ui.loading.status
  })
}

const mdp = dispatch => {
  return ({
    fetchPlaylists: () => dispatch(fetchPlaylists({ fetchType: 'addsong' })),
    addPlaylistSong: playlistSong => dispatch(addPlaylistSong(playlistSong))
  })
}

export default connect(msp, mdp)(AddSongToPlaylist);