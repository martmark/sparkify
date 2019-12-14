import React from 'react';
import PlaylistForm from './../playlist/playlist_form';
import AddSongToPlaylistIndex from './../playlist/add_song_playlist_index.jsx';

class Modal extends React.Component {

  render() {
    if (!this.props.modalType) {
      return null;
    }

    let component;
    switch (this.props.modalType) {
      case 'playlistForm':
        component = <PlaylistForm />;
        break;
      case 'addsong':
        component = <AddSongToPlaylistIndex />;
        break;
      default:
        return null;
    }

    return(
      <div className="modal-bg" onClick={this.props.closeModal}>
        <div className="modal-inner" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    )
  }
}

export default Modal;