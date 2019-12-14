import React from 'react';
import { connect } from 'react-redux';
import SongIndexItem from './song_index_item';
// import { followSong, unfollowSong } from './../../actions/song_actions';
import { followSong, unfollowSong } from './../../util/song_api_util';
import { setCurrentSong, setQueue } from './../../actions/music_actions';


class SongIndex extends React.Component {
  
  render() {
    let allSongs;
    if (this.props.allSongs) {
      allSongs = this.props.allSongs;
    } else {
      allSongs = this.props.songs;
    }
    return(
      <div className='song-idx-outer'>
        <ul className="song-index">
          {this.props.songs.map(song => <SongIndexItem 
            song={song} 
            key={song.id} 
            followSong={this.props.followSong} 
            unfollowSong={this.props.unfollowSong}
            indexType={this.props.indexType}
            setCurrentSong={this.props.setCurrentSong}
            allSongs={allSongs}
            playlistId={this.props.playlistId}
            playlistTitle={this.props.playlistTitle}
            ownedPlaylist={this.props.ownedPlaylist}
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
    setCurrentSong: song => dispatch(setCurrentSong(song))
  })
}

export default connect(null, mdp)(SongIndex);