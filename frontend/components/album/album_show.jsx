import React from 'react';
import SongIndexContainter from './../song/song_index_container';

class AlbumShow extends React.Component {

  componentDidMount() {
    // debugger;
    this.props.fetchAlbum(this.props.albumId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.albumId !== prevProps.albumId) {
      this.props.fetchAlbum(this.props.albumId);
    }
  }

  componentWillUnmount() {
    this.props.clearSongs();
  }

  render() {
    let album = '';
    if (this.props.album) {
      album = `${this.props.album.title} by ${this.props.album.artistName}`;
    }
    return (
      <div>
        {album}
        <SongIndexContainter />
      </div>
    )
  }
}

export default AlbumShow;