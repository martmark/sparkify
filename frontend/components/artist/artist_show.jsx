import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchArtist } from './../../actions/artist_actions';
import SongIndex from './../song/song_index';
import AlbumIndex from './../album/album_index';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';
import { followArtist, unfollowArtist } from './../../util/artist_api_util';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { followed: false };
    if (this.props.artist && this.props.artist.followed) {
      this.state = { followed: true };
    } else {
      this.state = { followed: false };
    }
    this.followArtist = this.followArtist.bind(this);
    this.unfollowArtist = this.unfollowArtist.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId)
    .then(() => this.setState({ followed: this.props.artist.followed }))
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

  followArtist() {
    let id = this.props.artist.id;
    this.props.followArtist(id)
      .then(() => this.setState({ followed: true }));
  }

  unfollowArtist() {
    let id = this.props.artist.id;
    this.props.unfollowArtist(id)
      .then(() => this.setState({ followed: false }));
  }

  render() {
    if (this.props.loading) {
      return (
        <h1>Loading...</h1>
      )
    }

    let button = '';
    if (!this.state.followed) {
      button = <button onClick={this.followArtist}>Follow Artist</button>;
    } else {
      button = <button onClick={this.unfollowArtist}>Unfollow Artist</button>;
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
      songIndex = <SongIndex songs={artistSongs} indexType={'artist'}/>

      albumIndex = <AlbumIndex albums={albums} />
    }
    return(
      <div className='artist-show'>
        <div className='info'>
          <span className='artist-name'>{artistName} {button}</span>
          <div className='artist-image'>
            {artistImage}
          </div>
        </div>
        <div className='music'>
          <span className='featured'>Featured</span>
          <div className='song-index'>{songIndex}</div>
          <span className='artist-albums'>Albums</span>
          <div className='artist-album-index'>{albumIndex}</div>
        </div>
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
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    followArtist: id => followArtist(id),
    unfollowArtist: id => unfollowArtist(id)
  });
};

export default withRouter(connect(msp, mdp)(ArtistShow));