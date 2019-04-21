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

    let artist = '';
    let songs = '';
    let albums = '';
    if (this.props.artist) {
      artist = this.props.artist.name;

      let allSongs = this.props.songs;
      let artistSongs = [];
      while (artistSongs.length < 5) {
        let song = allSongs[Math.floor(Math.random() * allSongs.length)];
        if (!artistSongs.includes(song)) artistSongs.push(song);
      }
      songs = <SongIndex songs={artistSongs} />

      albums = <AlbumIndex albums={this.props.albums} />
    }
    return(
      <div>
        <h1>{artist}</h1>
        <ul>{songs}</ul>
        <ul>{albums}</ul>
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