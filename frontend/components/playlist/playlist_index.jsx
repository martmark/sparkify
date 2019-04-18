import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylists();
  }


  render() {
    return(
      <div>
        <ul>
          {this.props.playlists.map(playlist => <li key={playlist.id}><Link to={`/playlist/${playlist.id}`}>{playlist.title}</Link> by {playlist.authorName}</li>)}
        </ul>
      </div>
    )
  }
}

export default PlaylistIndex;