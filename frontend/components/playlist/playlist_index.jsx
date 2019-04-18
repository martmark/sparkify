import React from 'react';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylists();
  }


  render() {
    return(
      <div>
        <ul>
          {this.props.playlists.map(playlist => <li key={playlist.id}>{playlist.title} by {playlist.authorName}</li>)}
        </ul>
      </div>
    )
  }
}

export default PlaylistIndex;