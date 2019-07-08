import React from 'react';
import { connect } from 'react-redux';
import { togglePlay } from './../../actions/music_actions';
import {Link} from 'react-router-dom';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: props.playing,
      currentSong: props.currentSong,
      currentIdx: 0,
      queue: props.queue
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    let musicPlayer = this.refs.musicPlayer;
    musicPlayer.addEventListener('ended', this.next);
    musicPlayer.addEventListener('error', this.next);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.currentSong.id !== newProps.currentSong.id) this.pause();
    this.setState({ currentSong: newProps.currentSong, queue: newProps.queue, currentIdx: newProps.currentIdx });
    if (newProps.playing === true) {
      this.setState({playing: true});
      this.play();
    } else {
      this.setState({playing: false});
      this.pause();
    }
  }

  play() {
    this.setState({ playing: true });
    this.refs.musicPlayer.play();
  }

  pause() {
    this.setState({ playing: false });
    this.refs.musicPlayer.pause();
  }

  next() {
    let current = this.state.currentIdx;
    if (current >= this.state.queue.length - 1) {
      this.pause();
      this.setState({currentIdx: 0, currentSong: this.state.queue[0]});
    } else {
      current = current + 1;
      this.setState({currentIdx: current, currentSong: this.state.queue[current]});
      this.refs.musicPlayer.src = this.state.currentSong.track_url;
      this.play();
    }
  }

  previous() {
    let current = this.state.currentIdx;
    if (current === 0) {
      this.pause();
    } else {
      current = current - 1;
      this.setState({ currentIdx: current, currentSong: this.state.queue[current] });
      this.refs.musicPlayer.src = this.state.currentSong.track_url;
      this.play();
    }
  }

  render() {

    let button;
    if (this.state.playing) {
      button = <i class="far fa-pause-circle" onClick={this.pause}></i>;
    } else {
      button = <i class="far fa-play-circle" onClick={this.play}></i>;
    }

    let song = this.state.currentSong;

    let albumArt = <img src='https://66.media.tumblr.com/792fa57dd5110fe51e7d8f3208a17f40/tumblr_pqkwj8ErPL1vud73ko1_500.png' alt='' />
    if (song.title) {
      albumArt = <Link to={`/album/${song.albumId}`}><img src={song.image_url} alt={song.albumTitle} /></Link>
    }

    return (
      <div className='music-player'>
        <div className='music-player-song-info'>
          <div className='music-player-album-image'>
            {albumArt}
          </div>
          <div className='music-player-text-info'>
            <span className='mp-track-title'>
              <Link to={`/album/${song.albumId}`}>{song.title}</Link>
            </span>
            <span className='mp-artist-name'>
              <Link to={`/artist/${song.artistId}`}>{song.artistName}</Link>
            </span>
          </div>
        </div>
        <div className='music-player-controls'>
          <i class="fas fa-step-backward" onClick={this.previous}></i>
          <div className='play-pause'>{button}</div>
          <i class="fas fa-step-forward" onClick={this.next}></i>
        </div>
        <div className='mp-volume-control'></div>
        <audio src={this.state.currentSong.track_url} autoPlay={this.state.playing} preload="none" ref="musicPlayer"></audio>
      </div>
    );
  }
}

const msp = state => {
  return({
    currentSong: state.ui.musicPlayer.currentSong,
    currentIdx: state.ui.musicPlayer.currentIdx,
    playing: state.ui.musicPlayer.playing,
    queue: state.ui.musicPlayer.queue
  });
};

const mdp = dispatch => {
  return({
    togglePlay: () => dispatch(togglePlay())
  });
};

export default connect(msp, mdp)(MusicPlayer);