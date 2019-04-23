import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { song } = this.props;
    return (
      <li className="song-index-item">
        <div className='song-title-info'> 
          <span className='song-title'>{song.title}</span>
          <span className='song-duration'>{song.duration}</span>
        </div>
        <div className='song-artist-info'>
          <span className='song-artist'>
            <Link to={`/artist/${song.artistId}`}>{song.artistName}</Link>
          </span>
          <span>
            <Link to={`/album/${song.albumId}`}>{song.albumTitle}</Link>
          </span>
        </div>
      </li>
    );
  }
}

export default SongIndexItem;