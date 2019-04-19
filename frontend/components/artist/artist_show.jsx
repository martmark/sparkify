import React from 'react';

class ArtistShow extends React.Component {
  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.artistId !== prevProps.artistId) {
      this.props.fetchArtist(this.props.artistId);
    }
  }

  render() {
    let artist = '';
    if (this.props.artist) {
      artist = this.props.artist.name;
    }
    return(
      <div>
        <h1>{artist}</h1>
      </div>
    )
  }


}

export default ArtistShow;