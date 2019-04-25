import React from 'react';
import ArtistIndexItem from './artist_index_item';

class ArtistIndex extends React.Component {
  render() {

    return (
      <div className='artist-index'>
        <ul className="artist-index-list">
          {this.props.artists.map(artist => <ArtistIndexItem artist={artist} key={artist.id} />)}
        </ul>
      </div>
    )
  }
}


export default ArtistIndex;