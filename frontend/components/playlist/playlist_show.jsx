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
      playlist = `<h1>${this.props.playlist.title}</h1></h2>${this.props.playlist.authorName}</h2>`;
    }
    return(
      <div>
        <section className='playlist-header'>
          {playlist}
        </section>
        <SongIndexContainter />
      </div>
    )
  }
}

export default PlaylistShow;