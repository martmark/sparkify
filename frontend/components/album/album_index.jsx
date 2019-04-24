import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
  render() {
    return (
        <ul className="album-index">
          {this.props.albums.map(album => <AlbumIndexItem album={album} key={album.id} />)}
        </ul>
    )
  }

}

export default AlbumIndex;