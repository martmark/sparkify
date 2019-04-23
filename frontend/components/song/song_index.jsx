import React from 'react';
import SongIndexItem from './song_index_item';


class SongIndex extends React.Component {
  render() {
    return(
      <div>
        <ul className="song-index">
          {this.props.songs.map(song => <SongIndexItem song={song} key={song.id} />)}
        </ul>
      </div>
    )
  }

}

// const mdp = dispatch => {
//   return({

//   })
// }

export default SongIndex;