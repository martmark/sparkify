import React from 'react';
import { connect } from 'react-redux';
import SongIndexItem from './song_index_item';
import { followSong, unfollowSong } from './../../actions/song_actions';


class SongIndex extends React.Component {
  render() {
    return(
      <div>
        <ul className="song-index">
          {this.props.songs.map(song => <SongIndexItem 
            song={song} 
            key={song.id} 
            followSong={this.props.followSong} 
            unfollowSong={this.props.unfollowSong}
          />)}
        </ul>
      </div>
    )
  }

}

const mdp = dispatch => {
  return({
    followSong: id => dispatch(followSong(id)),
    unfollowSong: id => dispatch(unfollowSong(id))
  })
}

export default connect(null, mdp)(SongIndex);