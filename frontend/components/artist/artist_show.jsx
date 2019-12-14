import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchArtist } from './../../actions/artist_actions';
import SongIndex from './../song/song_index';
import AlbumIndex from './../album/album_index';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';
import { followArtist, unfollowArtist } from './../../util/artist_api_util';
import { IconContext } from "react-icons";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { followed: false, featuredSongs: [] };
    // if (this.props.artist && this.props.artist.followed) {
    //   this.state = { followed: true };
    // } else {
    //   this.state = { followed: false };
    // }
    this.followArtist = this.followArtist.bind(this);
    this.unfollowArtist = this.unfollowArtist.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId)
      .then(() => this.setState({ followed: this.props.artist.followed }))
      .then(() => this.addFeaturedSongs())
      .then(() => this.props.setLoadingFalse());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.artistId !== prevProps.artistId) {
      this.props.setLoadingTrue();
      this.props.fetchArtist(this.props.artistId)
        .then(() => this.setState({ followed: this.props.artist.followed }))
        .then(() => this.addFeaturedSongs())
        .then(() => this.props.setLoadingFalse());
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

  addFeaturedSongs() {
    let artistSongs = [];
    while (artistSongs.length < 5) {
      let song = this.props.songs[Math.floor(Math.random() * this.props.songs.length)];
      if (!artistSongs.includes(song)) artistSongs.push(song);
    }
    this.setState({ featuredSongs: artistSongs });
  }

  render() {
    if (this.props.loading) {
      return (
        <div className='spinner-outer-2'>
          <div className='spinner-outer'>
            <div className="spinner">
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>
          </div>
        </div>
      )
    }

    let button;
    if (!this.state.followed) {
      button = (
        <IconContext.Provider
          value={{ className: "custom-icon reacticon", size: "3em" }}
        >
          <IoMdHeartEmpty onClick={this.followArtist} />
        </IconContext.Provider>
      );
    } else {
      button = (
        <IconContext.Provider
          value={{ className: "heart-icon reacticon", size: "3em" }}
        >
          <IoMdHeart onClick={this.unfollowArtist} />
        </IconContext.Provider>
      );
    }

    let artistName = '';
    let artistImage = '';
    let songIndex = '';
    let albumIndex = '';
    if (this.props.artist) {
      const { artist, songs, albums } = this.props;
     
      artistName = artist.name;
      artistImage = <img src={artist.image_url} alt={artist.name} />
      songIndex = <SongIndex 
        songs={this.state.featuredSongs} 
        allSongs={songs} 
        indexType={'artist'} />
      albumIndex = <AlbumIndex albums={albums} />
    }
    return(
      <div className='artist-show'>
        <div className='info'>
          <span className='artist-name'>
            {artistName}
            <span className='artist-show-follow-button'>{button}</span>
          </span>
        
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