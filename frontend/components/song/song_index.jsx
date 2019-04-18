import React from 'react';

class SongIndex extends React.Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.songs.map(song => <li key={song.id}>{song.title} by {song.artistName} - {song.duration}</li>)}
        </ul>
      </div>
    )
  }

}

export default SongIndex;