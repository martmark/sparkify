import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { saved: props.song.followed }
    this.followSong = this.followSong.bind(this);
    this.unfollowSong = this.unfollowSong.bind(this);
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

  render() {
    const { song, indexType } = this.props;
    let button = '';
    if (!this.state.saved) {
      if (indexType === 'collection') {
        return null;
      } else {
        button = <button onClick={this.followSong}>Save Song</button>;
      }
    } else {
      button = <button onClick={this.unfollowSong}>Unfollow Song</button>;
    }
    return (
      <li className="song-index-item">
        <div className='song-title-info'> 
          <span className='song-title'>{song.title}</span>
          {button}
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