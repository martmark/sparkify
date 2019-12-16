import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal, closeModal } from './../../actions/modal_actions';
import { removeSongFromPlaylist } from './../../actions/playlist_actions';
import { addToQueue } from './../../actions/music_actions';
import { IconContext } from "react-icons";
import { MdPlayArrow } from "react-icons/md";
import { IoMdAddCircle, IoIosMusicalNotes } from "react-icons/io";

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
    this.addSongToQueue = this.addSongToQueue.bind(this);
    this.removeFromQueue = this.removeFromQueue.bind(this);
    this.linkToAlbum = this.linkToAlbum.bind(this);
    this.linkToArtist = this.linkToArtist.bind(this);
    // this.albumStyling = this.albumStyling.bind(this);
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
    if (this.props.indexType == 'queue') {
      this.removeFromQueue();
    }
  }

  addToPlaylist() {
    this.props.openModal({ songId: this.props.song.id, modalType: 'addsong' })
  }

  reveal()  {
    $(`#drop${this.props.song.id}`).removeClass('hidden');
    $(document).on('click', this.hideDropdown);
  }

  hideDropdown() {
    $(`#drop${this.props.song.id}`).addClass('hidden');
    $(document).off('click', this.hideDropdown);
  }

  addSongToQueue() {
    this.props.addToQueue(this.props.song);
  }

  removeFromQueue() {
    this.props.removeFromQueue(this.props.queueIdx);
  }

  linkToArtist() {
    if (this.props.modalType == 'queue') {
      this.props.closeModal();
    }
    this.props.history.push(`/artist/${this.props.song.artistId}`);
  }

  linkToAlbum() {
    if (this.props.modalType == 'queue') {
      this.props.closeModal();
    }
    this.props.history.push(`/album/${this.props.song.albumId}`);
  }

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

    let musicNote = (
      <IconContext.Provider
        value={{ className: "song-index-item-note reacticon", size: "1.5em" }}
      >
        <IoIosMusicalNotes />
      </IconContext.Provider>
    );

    let playButton = (
      <IconContext.Provider
        value={{
          className: "song-index-item-play reacticon",
          size: "1.75em",
          color: "rgb(30,167,73)"
        }}
      >
        <MdPlayArrow onClick={this.playSong} />
      </IconContext.Provider>
    );

    let removeFromQueueButton;
    if (this.props.indexType == 'queue') {
      removeFromQueueButton = <li key={'aj3557772d8ch3'} className='song-idx-remove-btn'>
        <button onClick={this.removeFromQueue}>
          Remove from Queue
        </button>
      </li>
    }


    let artistAlbumInfo = '';
    if (indexType === 'collection' || indexType === 'playlist' || indexType === 'browse' || indexType === 'search' || indexType === 'queue') {
      artistAlbumInfo = <div className='song-artist-info'>
        <span className='song-artist clickable' onClick={this.linkToArtist}>
          {song.artistName}
        </span>
        <span> • </span>
        <span className='clickable' onClick={this.linkToAlbum}>
          {song.albumTitle}
        </span>
      </div>;
    }

    let removeButton;
    if (this.props.ownedPlaylist) {
      removeButton = <li key={'aj38ch3'} className='song-idx-remove-btn'>
        <button onClick={() => this.props.removeSongFromPlaylist({
            playlistId: this.props.playlistId, 
            songId: song.id})
          }
        >
          {`Remove from ${this.props.playlistTitle}`}
        </button>
      </li>
    }

    let addToQueueButton = <li key={'aMi*e23'} className='song-idx-queue-btn'>
      <button onClick={this.addSongToQueue}>
        Add to Queue
      </button>
    </li>

    let albumImage;
    if (indexType === 'artist' || indexType === 'collection' || indexType =='search' || indexType == 'queue' ) {
      albumImage = (
        <div className="song-index-item-image clickable" onClick={this.linkToAlbum}>
          <img src={song.image_url} alt={song.albumName} />
        </div>
      );
    }

    if (indexType === 'album') {
      return (
        <li className="song-index-item album-song-item" id='songindexitem'>
          <div className="song-idx-list-icon">
            {musicNote}
            {playButton}
          </div>
          {albumImage}
          <div className='song-idx-item-info'>
            <div className="song-index-item-details">
              <section className="song-index-item-left">
                <span className="song-index-item-title">{song.title}</span>
                {artistAlbumInfo}
              </section>
              <div className="song-index-item-buttons">
                <ul id={`drop${song.id}`} className="songdropdown hidden">
                  {removeFromQueueButton}
                  {removeButton}
                  {addToQueueButton}
                  <li key={1}>{button}</li>
                  <li key={2}>{addSong}</li>
                </ul>
                <IconContext.Provider
                  value={{
                    className: "song-index-item-add reacticon",
                    size: "1.25em"
                  }}
                >
                  <IoMdAddCircle onClick={this.reveal} />
                </IconContext.Provider>
                <span className="song-duration">{song.duration}</span>
              </div>
            </div>
          </div>
        </li>
      )
    } else {
      return (
        <li className="song-index-item" id='songindexitem'>
          <div className="song-idx-list-icon">
            {musicNote}
            {playButton}
          </div>
          {albumImage}
          <div className='song-idx-item-info'>
            <div className="song-index-item-details">
              <section className="song-index-item-left">
                <span className="song-index-item-title">{song.title}</span>
                {artistAlbumInfo}
              </section>
              <div className="song-index-item-buttons">
                <ul id={`drop${song.id}`} className="songdropdown hidden">
                  {removeFromQueueButton}
                  {removeButton}
                  {addToQueueButton}
                  <li key={1}>{button}</li>
                  <li key={2}>{addSong}</li>
                </ul>
                <IconContext.Provider
                  value={{
                    className: "song-index-item-add reacticon",
                    size: "1.25em"
                  }}
                >
                  <IoMdAddCircle onClick={this.reveal} />
                </IconContext.Provider>
                <span className="song-duration">{song.duration}</span>
              </div>
            </div>
          </div>
        </li>
      )
    }
  }
}

const msp = state => {
  return {
    modalType: state.ui.modal.modalType
  };
};

const mdp = dispatch => {
  return {
    openModal: modalInfo => dispatch(openModal(modalInfo)),
    closeModal: () => dispatch(closeModal()),
    removeSongFromPlaylist: playlistSong => dispatch(removeSongFromPlaylist(playlistSong)),
    addToQueue: song => dispatch(addToQueue(song))
  }
}

export default withRouter(connect(msp, mdp)(SongIndexItem));