import React from 'react';
import { connect } from 'react-redux';
import SongIndexItem from './song_index_item';
// import { followSong, unfollowSong } from './../../actions/song_actions';
import { followSong, unfollowSong } from './../../util/song_api_util';
import { setCurrentSong, setQueue } from './../../actions/music_actions';


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
            indexType={this.props.indexType}
            setCurrentSong={this.props.setCurrentSong}
            allSongs={this.props.songs}
            setQueue={this.props.setQueue}
          />)}
        </ul>
      </div>
    )
  }

}

const mdp = dispatch => {
  return({
    followSong: id => followSong(id),
    unfollowSong: id => unfollowSong(id),
    setCurrentSong: song => dispatch(setCurrentSong(song)),
    setQueue: queueInfo => dispatch(setQueue(queueInfo))
  })
}

export default connect(null, mdp)(SongIndex);