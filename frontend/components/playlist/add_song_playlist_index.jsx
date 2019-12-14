import { connect } from 'react-redux';
import { fetchPlaylists } from './../../actions/playlist_actions';
// import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';
import { addPlaylistSong } from './../../util/playlist_song_api_util';
import React from 'react';
import { closeModal } from './../../actions/modal_actions';

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
    let that = this;
    return e => {
      this.props.addPlaylistSong({ playlistId: playlistId, songId: this.props.songId })
        .then(() => this.props.closeModal());
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
      <div className="addsong-idx-outer">
        <ul className='addsong-idx'>
          {playlistLis}
        </ul>
        <button id="new-playlist-button" onClick={this.props.closeModal}>CANCEL</button>
      </div>
    )

  }
}

const msp = (state) => {
  return {
    playlists: Object.values(state.entities.playlists),
    songId: state.ui.modal.songId
  }
}

const mdp = dispatch => {
  return ({
    fetchPlaylists: () => dispatch(fetchPlaylists({ fetchType: 'addsong' })),
    addPlaylistSong: playlistSong => addPlaylistSong(playlistSong),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(msp, mdp)(AddSongToPlaylist);