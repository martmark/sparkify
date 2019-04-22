import React from 'react';
import { connect } from 'react-redux';
import { fetchArtist } from './../../actions/artist_actions';
import SongIndex from './../song/song_index';
import AlbumIndex from './../album/album_index';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';
import { artistShowSongsSelector } from './../../reducers/selectors';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId)
    .then(() => this.props.setLoadingFalse());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.artistId !== prevProps.artistId) {
      this.props.fetchArtist(this.props.artistId);
    }
  }

  componentWillUnmount() {
    this.props.setLoadingTrue();
  }

  render() {
    if (this.props.loading) {
      return (
        <h1>Loading...</h1>
      )
    }

    let artistName = '';
    let artistImage = '';
    let songIndex = '';
    let albumIndex = '';
    if (this.props.artist) {
      const { artist, songs, albums } = this.props;
     
      artistName = artist.name;
      artistImage = <img src={artist.image_url} alt={artist.name} />


      
      let artistSongs = [];
      while (artistSongs.length < 5) {
        let song = songs[Math.floor(Math.random() * songs.length)];
        if (!artistSongs.includes(song)) artistSongs.push(song);
      }
      songIndex = <SongIndex songs={artistSongs} />

      albumIndex = <AlbumIndex albums={albums} />
    }
    return(
      <div className='artist-show'>
        <h1>{artistName}</h1>
        <div className='artist-show-image'>
          {artistImage}
        </div>
        <ul>{songIndex}</ul>
        <ul>{albumIndex}</ul>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  let songs = Object.values(state.entities.songs);
  let artistId = ownProps.match.params.artistId;
  let artist = state.entities.artists[artistId];
  let albums = Object.values(state.entities.albums);
  let loading = state.ui.loading.status
  // if (state.entities.songs) {
  //   songs = artistShowSongsSelector(state, artistId);
  // };
  return ({
    artistId,
    artist,
    songs,
    albums,
    loading
  });
};

const mdp = dispatch => {
  return ({
    fetchArtist: id => dispatch(fetchArtist(id)),
    setLoadingFalse: () => dispatch(setLoadingFalse()),
    setLoadingTrue: () => dispatch(setLoadingTrue())
  });
};

export default connect(msp, mdp)(ArtistShow);