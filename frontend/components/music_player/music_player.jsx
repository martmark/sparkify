import React from 'react';
import { connect } from 'react-redux';
import { togglePlay } from './../../actions/music_actions';
import {Link} from 'react-router-dom';
import { IconContext } from "react-icons";
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdSkipNext,
  MdSkipPrevious
} from "react-icons/md";
import { IoIosRepeat, IoIosShuffle } from 'react-icons/io';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: props.playing,
      currentSong: props.currentSong,
      currentIdx: 0,
      queue: props.queue,
      repeat: false
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.clickNext = this.clickNext.bind(this);
    this.toggleRepeat = this.toggleRepeat.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);
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
    if (this.state.queue.length == 0) {
      return;
    }
    this.setState({ playing: true });
    const audioPromise = this.refs.musicPlayer.play();
    if (audioPromise !== undefined) {
      audioPromise
        .then(_ => {
          // autoplay started
          return;
        })
        .catch(err => {
          // catch dom exception
          return;
        });
    }
  }

  pause() {
    this.setState({ playing: false });
    this.refs.musicPlayer.pause();
  }

  next() {
    if (this.state.repeat) {
      this.play();
    } else {
      this.clickNext();
    }
  }

  clickNext() {
    let current = this.state.currentIdx;
    if (this.state.shuffle) {
      let queue = this.state.queue;
      let nextSong = queue[[Math.floor(Math.random() * queue.length)]];
      while (nextSong == this.state.currentSong) {
        nextSong = queue[[Math.floor(Math.random() * queue.length)]];
      }
      let nextIdx = queue.indexOf(nextSong);
      this.setState({ currentIdx: nextIdx, currentSong: nextSong });
      this.refs.musicPlayer.src = this.state.currentSong.track_url;
      this.play();
    } else {
      if (current >= this.state.queue.length - 1) {
        this.pause();
        this.setState({ currentIdx: 0, currentSong: this.state.queue[0] });
      } else {
        current = current + 1;
        this.setState({ currentIdx: current, currentSong: this.state.queue[current] });
        this.refs.musicPlayer.src = this.state.currentSong.track_url;
        this.play();
      }
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

  toggleRepeat() {
    let repeat = this.state.repeat;
    this.setState({ repeat: !repeat });
  }

  toggleShuffle() {
    let shuffle = this.state.shuffle;
    this.setState({ shuffle: !shuffle });
  }

  render() {

    let button;
    if (this.state.playing) {
      button = (
        <IconContext.Provider
          value={{ className: "play-icon reacticon", size: "3em" }}
        >
          <MdPauseCircleOutline onClick={this.pause} />
        </IconContext.Provider>
      );
    } else {
      button = (
        <IconContext.Provider
          value={{ className: "play-icon reacticon", size: "3em" }}
        >
          <MdPlayCircleOutline onClick={this.play} />
        </IconContext.Provider>
      );
    }

    let shuffleButton;
    if (this.state.shuffle) {
      shuffleButton = <IconContext.Provider
        value={{ className: "toggle-shuffle repeat-on", size: "1.25em" }}
      >
        <IoIosShuffle onClick={this.toggleShuffle} />
      </IconContext.Provider>
    } else {
      shuffleButton = <IconContext.Provider
        value={{ className: "toggle-shuffle", size: "1.25em" }}
      >
        <IoIosShuffle onClick={this.toggleShuffle} />
      </IconContext.Provider>
    }

    let repeatButton;
    if (this.state.repeat) {
      repeatButton = <IconContext.Provider
        value={{ className: "toggle-repeat repeat-on", size: "1.25em" }}
      >
        <IoIosRepeat onClick={this.toggleRepeat} />
      </IconContext.Provider>
    } else {
      repeatButton = <IconContext.Provider
        value={{ className: "toggle-repeat", size: "1.25em" }}
      >
        <IoIosRepeat onClick={this.toggleRepeat} />
      </IconContext.Provider>
    }

    let song = this.state.currentSong;

    let albumArt = <img src='https://sparkifyimages.s3.amazonaws.com/blank.jpg' alt='' />
    if (song.title) {
      albumArt = <Link to={`/album/${song.albumId}`}><img src={song.image_url} alt={song.albumTitle} /></Link>
    }

    return (
      <div className="music-player">
        <div className="music-player-song-info">
          <div className="music-player-album-image">{albumArt}</div>
          <div className="music-player-text-info">
            <span className="mp-track-title">
              <Link to={`/album/${song.albumId}`}>{song.title}</Link>
            </span>
            <span className="mp-artist-name">
              <Link to={`/artist/${song.artistId}`}>{song.artistName}</Link>
            </span>
          </div>
        </div>
        <div className="music-player-controls">
          {shuffleButton}
          <IconContext.Provider
            value={{ className: "play-icon reacticon", size: "2em" }}
          >
            <MdSkipPrevious onClick={this.previous} />
          </IconContext.Provider>
          <div className="play-pause">{button}</div>
          <IconContext.Provider
            value={{ className: "play-icon reacticon", size: "2em" }}
          >
            <MdSkipNext onClick={this.clickNext} />
          </IconContext.Provider>
          {repeatButton}
        </div>
        <div className="mp-volume-control"></div>
        <audio
          src={this.state.currentSong.track_url}
          autoPlay={this.state.playing}
          preload="none"
          ref="musicPlayer"
          type="audio/mp3"
        ></audio>
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