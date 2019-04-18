import React from 'react';
import SongIndexContainter from './../song/song_index_container';

class PlaylistShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    this.props.fetchPlaylist(this.props.playlistId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.playlistId !== prevProps.playlistId) {
      this.props.fetchPlaylist(this.props.playlistId)
    }
  }

  render() {
    let playlist = '';
    if (this.props.playlist) {
      playlist = `${this.props.playlist.title} by ${this.props.playlist.authorName}`;
    }
    return(
      <div>
        {playlist}
        <SongIndexContainter />
      </div>
    )
  }
}

export default PlaylistShow;