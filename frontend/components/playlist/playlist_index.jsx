import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistIndexItem from './playlist_index_item';
import { connect } from 'react-redux';

class PlaylistIndex extends React.Component {
 
  render() {
    return(
      <div>
        <ul>
          {this.props.playlists.map(playlist => <PlaylistIndexItem key={playlist.id} playlist={playlist} />)}
        </ul>
      </div>
    )
  }
}

// const msp = state => {
//   let playlists = [];
//   if (state.entities.playlists) playlists = Object.values(state.entities.playlists);
//   return({
//     playlists
//   })
// }

export default PlaylistIndex;