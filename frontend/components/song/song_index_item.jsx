import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal, closeModal } from './../../actions/modal_actions';
import { removeSongFromPlaylist } from './../../actions/playlist_actions';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { saved: props.song.followed };
    this.followSong = this.followSong.bind(this);
    this.unfollowSong = this.unfollowSong.bind(this);
    this.playSong = this.playSong.bind(this);
    this.addToPlaylist = this.addToPlaylist.bind(this);
    this.reveal = this.reveal.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  followSong() {
    let id = this.props.song.id;
    this.props.followSong(id)
    .then(() => this.setState({ saved: true }));
  }

  unfollowSong() {
    let id = this.props.song.id;
    this.props.unfollowSong(id)
    .then(() => this.setState({ saved: false }));
  }

  playSong() {
    let idx = this.props.allSongs.indexOf(this.props.song);
    this.props.setCurrentSong({
      currentSong: this.props.song,
      currentIdx: idx,
      queue: this.props.allSongs
    });
  }

  addToPlaylist() {
    this.props.openModal({ songId: this.props.song.id, modalType: 'addsong' })
  }

  reveal()  {
    $(`#${this.props.song.id}`).removeClass('hidden');
    $(document).on('click', this.hideDropdown);
  };

  hideDropdown() {
    $(`#${this.props.song.id}`).addClass('hidden');
    $(document).off('click', this.hideDropdown);
  };

  render() {
    const { song, indexType} = this.props;

    let button;
    if (!this.state.saved) {
      if (indexType === 'collection') {
        return null;
      } else {
        button = <button onClick={this.followSong}>Add to Library</button>;
      }
    } else {
      button = <button onClick={this.unfollowSong}>Remove from Libary</button>;
    }

    let addSong = <button onClick={this.addToPlaylist}>Add to Playlist</button>;


    let artistAlbumInfo = '';
    if (indexType === 'collection' || indexType === 'playlist' || indexType === 'browse' || indexType === 'search') {
      artistAlbumInfo = <div className='song-artist-info'>
        <span className='song-artist'>
          <Link to={`/artist/${song.artistId}`}>{song.artistName} </Link>
        </span>
        <span> • </span>
        <span>
          <Link to={`/album/${song.albumId}`}> {song.albumTitle}</Link>
        </span>
      </div>;
    }

    let removeButton;
    if (this.props.ownedPlaylist) {
      removeButton = <li key={'aj38ch3'}>
        <button onClick={() => this.props.removeSongFromPlaylist({
            playlistId: this.props.playlistId, 
            songId: song.id})
          }
        >
          {`Remove from ${this.props.playlistTitle}`}
        </button>
      </li>
    }

    let albumImage = '';
    if (indexType === 'artist') {
      albumImage = <div className='song-index-item-image'>
        <img src={song.image_url} alt={song.albumName} />
      </div>
    }

    return (
      <li className="song-index-item">
        <button onClick={this.playSong}>play</button>
        {albumImage}
        <div className='song-index-item-details'>
          <section className='song-index-item-top'>
            <span className='song-index-item-title'>{song.title}</span>
            <div className='song-index-item-buttons'>
              <button onClick={this.reveal} className='songdropdown-btn'>•••</button>
              <ul id={song.id} className="songdropdown hidden">
                {removeButton}
                <li key={1}>
                  {button}
                </li>
                <li key={2}>
                  {addSong}
                </li>
              </ul>
              <span className='song-duration'>{song.duration}</span>
            </div>
          </section>
          {artistAlbumInfo}
        </div>
      </li>
    );
  }
}


const mdp = dispatch => {
  return {
    openModal: modalInfo => dispatch(openModal(modalInfo)),
    closeModal: () => dispatch(closeModal()),
    removeSongFromPlaylist: playlistSong => dispatch(removeSongFromPlaylist(playlistSong))
  }
}

export default connect(null, mdp)(SongIndexItem);