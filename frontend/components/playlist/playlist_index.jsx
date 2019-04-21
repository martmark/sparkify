import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PlaylistIndex extends React.Component {
 
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

const msp = state => {
  let playlists = [];
  if (state.entities.playlists) playlists = Object.values(state.entities.playlists);
  return({
    playlists
  })
}

export default connect(msp)(PlaylistIndex);