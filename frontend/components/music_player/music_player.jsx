import React from 'react';
import { connect } from 'react-redux';
import { togglePlay } from './../../actions/music_actions';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { clearUpNext } from './../../actions/music_actions';
import { openModal } from './../../actions/modal_actions';

import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdSkipNext,
  MdSkipPrevious,
  MdQueueMusic
} from "react-icons/md";
import {
  IoIosRepeat,
  IoIosShuffle,
  IoMdVolumeHigh,
  IoMdVolumeOff
} from 'react-icons/io';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: props.playing,
      currentSong: props.currentSong,
      currentIdx: 0,
      queue: [],
      repeat: false,
      volume: 100,
      prevVolume: null,
      cursorPosition: 0,
      currentTime: "0:00",
      upNext: [],
      origQueue: [],
      shuffleQueue: [],
      origIndex: null,
      shuffleIdx: null,
      queueName: null,
      volumeOn: true
    };

    this.positionInterval = null;
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.clickNext = this.clickNext.bind(this);
    this.toggleRepeat = this.toggleRepeat.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.mutePlayer = this.mutePlayer.bind(this);
    this.unmutePlayer = this.unmutePlayer.bind(this);
    this.setCursorPosition = this.setCursorPosition.bind(this);
    this.isntPlaying = this.isntPlaying.bind(this);
    this.changeCursorPosition = this.changeCursorPosition.bind(this);
    this.showQueue = this.showQueue.bind(this);
    this.removeFromQueue = this.removeFromQueue.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
  }

  componentDidMount() {
    let musicPlayer = this.refs.musicPlayer;
    musicPlayer.addEventListener('ended', this.next);
    musicPlayer.addEventListener('error', this.next);

    this.positionInterval = setInterval(() => {
      this.setCursorPosition();
    }, 100);
  }

  componentWillReceiveProps(newProps) {
    // debugger;
    if (newProps.upNext) {
      let newSong = newProps.upNext;
      let newUpNextArr = this.state.upNext.concat(newSong);
      this.setState({
        upNext: newUpNextArr
      }, () => {
        this.props.clearUpNext();
        if (newProps.modalType == 'queue') this.showQueue();
      });
    } else if ((this.props.currentSong.id !== newProps.currentSong.id) || (this.props.queueName !== newProps.queueName)) {
      this.pause();
      if (newProps.queue.length > 0) {
        if (this.state.shuffle) {
          let currentSong = newProps.currentSong;
          let shuffledQueue = this.shuffleArray(newProps.queue);
          let shuffledQueueIdx = shuffledQueue.indexOf(currentSong);
          shuffledQueue.splice(shuffledQueueIdx, 1);
          shuffledQueue.unshift(currentSong);
          this.setState({
            currentSong: currentSong,
            origQueue: newProps.queue,
            origIndex: newProps.currentIdx,
            shuffleQueue: shuffledQueue,
            shuffleIdx: 0,
            currentTime: '0:00',
            cursorPosition: 0,
            queueName: newProps.queueName,
          })
        } else {
          this.setState({
            currentSong: newProps.currentSong,
            queue: newProps.queue,
            currentIdx: newProps.currentIdx,
            currentTime: '0:00',
            cursorPosition: 0,
            queueName: newProps.queueName
          });
        }
      } else {
        this.setState({
          currentSong: newProps.currentSong,
          currentTime: '0:00',
          cursorPosition: 0
        });
      }
      let span = document.getElementById('durationspan');
      if (newProps.currentSong.duration) {
        span.innerHTML = newProps.currentSong.duration;
      }
      if (newProps.playing === true) {
        this.setState({playing: true});
        this.play();
      } else {
        this.setState({playing: false});
        this.pause();
      }
    } else if (newProps.playing && (newProps.modalType === this.props.modalType)) {
      this.setState({ playing: true });
      this.play();
    }
  }

  componentWillUnmount() {
    clearInterval(this.positionInterval);
  }

  play() {
    if (this.state.currentSong.title == "") {
      if (this.state.upNext.length > 0) {
        let nextSong = this.state.upNext.shift();
        let durSpan = document.getElementById('durationspan');
        if (nextSong.duration) {
          durSpan.innerHTML = nextSong.duration;
        }
        this.refs.musicPlayer.src = nextSong.track_url;

        this.setState({
          currentSong: nextSong,
          currentTime: '0:00',
          cursorPosition: 0
        }, () => {
          this.play();
        });
        let span = document.getElementById('durationspan');
        if (nextSong.duration) {
          span.innerHTML = nextSong.duration;
        }
      } else {
        return;
      }
    }
    this.setState({ playing: true });
    const audioPromise = this.refs.musicPlayer.play();
    if (audioPromise !== undefined) {
      audioPromise
        .then(_ => {
          return;
        })
        .catch(err => {
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
      this.setState({ currentTime: '0:00', cursorPosition: 0 });
      this.play();
    } else {
      this.clickNext();
    }
  }

  clickNext() {
    let current = this.state.currentIdx;
    if (this.state.upNext.length > 0) {
      let nextSong = this.state.upNext.shift();
      let span = document.getElementById('durationspan');
      if (nextSong.duration) {
        span.innerHTML = nextSong.duration;
      }
      this.refs.musicPlayer.src = nextSong.track_url;

      this.setState({
        currentSong: nextSong,
        currentTime: '0:00',
        cursorPosition: 0
      }, () => {
        this.play();
      });

      if (this.props.modalType == 'queue') {
        this.showQueue();
      }

    } else if (this.state.shuffle) {

      let queue = this.state.shuffleQueue;
      if (this.state.shuffleIdx == queue.length - 1) {

          this.pause();
          this.setState({
            currentIdx: 0,
            shuffleIdx: 0,
            currentSong: {title: '', duration: '0:00', track_url: ''},
            currentTime: '0:00',
            cursorPosition: 0,
            playing: false
          });
          let span = document.getElementById('durationspan');
          span.innerHTML = '0:00';
          if (this.props.modalType == 'queue') {
            this.showQueue();
          }
          return;

      }
      let nextIdx = this.state.shuffleIdx + 1;
      let nextSong = this.state.shuffleQueue[nextIdx];
      let origIdx = this.state.origQueue.indexOf(nextSong);

      this.setState({
        shuffleIdx: nextIdx,
        origIdx: origIdx,
        currentSong: nextSong,
        currentTime: '0:00',
        cursorPosition: 0
      });
      let span = document.getElementById('durationspan');
      if (nextSong.duration) {
        span.innerHTML = nextSong.duration;
      }
      this.refs.musicPlayer.src = nextSong.track_url;
      this.play();
    } else {
      if (current >= this.state.queue.length - 1) {
        let queue = this.state.queue;
        if (queue.length == 0) {

          this.pause();
          this.setState({
            currentIdx: 0,
            currentSong: { title: '', duration: '0:00', track_url: '' },
            currentTime: '0:00',
            cursorPosition: 0,
            playing: false
          });
          let span = document.getElementById('durationspan');
          span.innerHTML = '0:00';
          if (this.props.modalType == 'queue') {
            this.showQueue();
          }
          return;

        } else {
          this.pause();
          this.setState({
            currentIdx: 0,
            currentSong: this.state.queue[0],
            currentTime: '0:00',
            cursorPosition: 0
          });
          let span = document.getElementById('durationspan');
          if (this.state.queue[0].duration) {
            span.innerHTML = this.state.queue[0].duration;
          }
          if (this.props.modalType == 'queue') {
            this.showQueue();
          }
        }
      } else {
        let currentIndex = this.state.currentIdx + 1;
        this.setState({
          currentIdx: currentIndex,
          currentSong: this.state.queue[currentIndex],
          currentTime: '0:00',
          cursorPosition: 0
        });
        let span = document.getElementById('durationspan');
        if (this.state.queue[currentIndex].duration) {
          span.innerHTML = this.state.queue[currentIndex].duration;
        }
        this.refs.musicPlayer.src = this.state.currentSong.track_url;
        this.play();
        if (this.props.modalType == 'queue') {
          this.showQueue();
        }
      }
    }
  }

  previous() {
    if (this.state.cursorPosition > 10) {
      this.setState({
        currentTime: '0:00',
        cursorPosition: 0
      });
      let player = document.getElementById('the-music-player');
      player.currentTime = 0;
      return;
    }

    if (!this.state.shuffle) {
    let current = this.state.currentIdx;
      if (current === 0) {
        this.pause();
        this.setState({
          currentTime: '0:00',
          cursorPosition: 0
        })
        let player = document.getElementById('the-music-player');
        player.currentTime = 0;
      } else {
        current = current - 1;
        this.setState({
          currentIdx: current,
          currentSong: this.state.queue[current],
          currentTime: '0:00',
          cursorPosition: 0
        });
        let span = document.getElementById('durationspan');
        if (this.state.queue[current].duration) {
          span.innerHTML = this.state.queue[current].duration;
        }
        this.refs.musicPlayer.src = this.state.currentSong.track_url;
        this.play();
      }
      return;
    }

    if (this.state.shuffle) {
      let shuffleIndex = this.state.shuffleIdx;
      if (shuffleIndex === 0) {
        this.pause();
        this.setState({
          currentTime: '0:00',
          cursorPosition: 0
        })
        let player = document.getElementById('the-music-player');
        player.currentTime = 0;
      } else {
        shuffleIndex = shuffleIndex - 1;
        this.setState({
          shuffleIdx: shuffleIndex,
          currentSong: this.state.shuffleQueue[shuffleIndex],
          currentTime: '0:00',
          cursorPosition: 0
        });
        let span = document.getElementById('durationspan');
        if (this.state.shuffleQueue[shuffleIndex]) {
          span.innerHTML = this.state.shuffleQueue[shuffleIndex].duration;
        }
        this.refs.musicPlayer.src = this.state.currentSong.track_url;
        this.play();
      }
    }

  }

  toggleRepeat() {
    let repeat = this.state.repeat;
    this.setState({ repeat: !repeat });
  }

  toggleShuffle() {
    let shuffle = this.state.shuffle;
    if (this.state.queue.length === 0) {
      this.setState({ shuffle: !shuffle });
      return;
    }
    if (!shuffle) {
      let currentSong = this.state.currentSong;
      let shuffledQueue = this.shuffleArray(this.state.queue);
      let shuffledQueueIdx = shuffledQueue.indexOf(currentSong);
      let origQueueIdx = this.state.queue.indexOf(currentSong);
      shuffledQueue.splice(shuffledQueueIdx, 1);
      shuffledQueue.unshift(currentSong);
      this.setState({
        origQueue: this.state.queue,
        origIndex: origQueueIdx,
        shuffleQueue: shuffledQueue,
        shuffleIdx: 0,
        shuffle: true
      })
    } else {
      let origIndex = this.state.origQueue.indexOf(this.state.currentSong);
      this.setState({
        queue: this.state.origQueue,
        currentIdx: origIndex,
        shuffle: false
      })
    }
  }

  setVolume(e) {
    var player = document.getElementById('the-music-player');
    this.setState({ volume: e.target.value, volumeOn: false });
    player.volume = e.target.value / 100;
  }

  mutePlayer() {
    var player = document.getElementById('the-music-player');
    player.volume = 0;
    this.setState({ prevVolume: this.state.volume, volume: 0, volumeOn: false });
  }

  unmutePlayer() {
    var player = document.getElementById('the-music-player');
    let newVol;
    if (this.state.prevVolume) {
      newVol = this.state.prevVolume;
    } else {
      newVol = 50;
    }
    player.volume = newVol / 100;
    this.setState({ volume: newVol, prevVolume: null });
  }

  setCursorPosition() {
    if (this.state.playing) {
      var player = document.getElementById('the-music-player');
      let currentTime = player.currentTime;
      if (currentTime) {
        let pos = Math.round(player.currentTime / player.duration * 1000);
        let minutes = Math.floor(currentTime / 60);
        let seconds = Math.round(currentTime) % 60;
        let secStr = seconds;
        if (seconds < 10) {
          secStr = '0' + seconds;
        }
        let newTime = minutes.toString() + ':' + secStr;
        this.setState({ cursorPosition: pos, currentTime: newTime });
      } else {
        this.setState({ cursorPosition: 0, currentTime: '0:00'});
      }
    }
  }

  changeCursorPosition(e) {
    var player = document.getElementById('the-music-player');
    if (!player.currentTime) return;
    let duration = player.duration;
    let pos = e.target.value;
    let currentTime = duration * (pos / 1000);
    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.round(currentTime) % 60;
    let secStr = seconds;
    if (seconds < 10) {
      secStr = '0' + seconds;
    }
    let newTime = minutes.toString() + ':' + secStr;
    this.setState({ cursorPosition: pos, currentTime: newTime });
    player.currentTime = currentTime;
  }

  isntPlaying() {
    return !this.state.playing;
  }

  showQueue() {
    // debugger;
    if (this.state.shuffle) {
      if (this.state.shuffleQueue.length > 0) {
        let normalQueue = this.state.shuffleQueue.filter((song, idx) => idx > this.state.shuffleIdx);
        this.props.openModal({
          modalType: 'queue',
          upNext: this.state.upNext,
          removeFromQueue: this.removeFromQueue,
          normalQueue,
          queueName: this.state.queueName
        });
      } else {
        this.props.openModal({
          modalType: 'queue',
          upNext: this.state.upNext,
          removeFromQueue: this.removeFromQueue,
          normalQueue: [],
          queueName: this.state.queueName
        });
      }
    } else {
      // debugger;
      let normalQueue = this.state.queue.filter((_, idx) => idx > this.state.currentIdx);
      this.props.openModal({
        modalType: 'queue',
        upNext: this.state.upNext,
        removeFromQueue: this.removeFromQueue,
        normalQueue,
        queueName: this.state.queueName
      });
    }
  }

  removeFromQueue(idx) {
    this.state.upNext.splice(idx, 1);
    this.showQueue();
  }

  shuffleArray(arr) {
    let newArr = [];
    while (newArr.length < arr.length) {
      let song = arr[Math.floor(Math.random() * arr.length)];
      if (!newArr.includes(song)) newArr.push(song);
    }
    return newArr;
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

    let volumeButton;

    var playerplayer = document.getElementById('the-music-player');
    if ((playerplayer && playerplayer.volume > 0.0) || this.state.volumeOn) {
      volumeButton = <IconContext.Provider
        value={{ className: "volume-button", size: "1.25em" }}
      >
        <IoMdVolumeHigh onClick={this.mutePlayer} />
      </IconContext.Provider>;
    } else {
      volumeButton = <IconContext.Provider
        value={{ className: "volume-button", size: "1.25em" }}
      >
        <IoMdVolumeOff onClick={this.unmutePlayer} />
      </IconContext.Provider>;
    }

    let queueButton;
    if (this.state.upNext.length > 0) {
      queueButton = <IconContext.Provider
        value={{ className: "queue-button queue-active clickable", size: "1.25em" }}
      >
        <MdQueueMusic onClick={this.showQueue} />
      </IconContext.Provider>;
    } else if (this.state.queue.length > 0) {
      queueButton = <IconContext.Provider
        value={{ className: "queue-button clickable", size: "1.25em" }}
      >
        <MdQueueMusic onClick={this.showQueue} />
      </IconContext.Provider>;
    } else {
      queueButton = <IconContext.Provider
        value={{ className: "queue-button inactive", size: "1.25em" }}
      >
        <MdQueueMusic />
      </IconContext.Provider>;
    }

    let song = this.state.currentSong;

    let albumArt = <img src='https://sparkifyimages.s3.amazonaws.com/blank.jpg' alt='' />
    let albumId;
    let artistId;
    let artistName;
    let songTitle;
    let trackUrl;
    if (song && song.title != "") {
      albumArt = <Link to={`/album/${song.albumId}`}><img src={song.image_url} alt={song.albumTitle} /></Link>;
      albumId = song.albumId;
      artistId = song.artistId;
      songTitle = song.title;
      artistName = song.artistName;
      trackUrl = song.track_url;
    }
    return (
      <div className="music-player">
        <div className="music-player-song-info">
          <div className="music-player-album-image">{albumArt}</div>
          <div className="music-player-text-info">
            <span className="mp-track-title">
              <Link to={`/album/${albumId}`}>{songTitle}</Link>
            </span>
            <span className="mp-artist-name">
              <Link to={`/artist/${artistId}`}>{artistName}</Link>
            </span>
          </div>
        </div>
        <div className="music-player-center">
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
          <div className='mp-progress'>
            <span className='current-time-display'>{this.state.currentTime}</span>
            <input
              id="the-progress-bar"
              type="range"
              min="0"
              max="1000"
              step="1"
              value={this.state.cursorPosition}
              onInput={this.changeCursorPosition}
              onChange={this.changeCursorPosition}
            />
            <span className='duration-display' id='durationspan'>0:00</span>
          </div>
        </div>
        <div className="mp-volume-control">
          {queueButton}
          {volumeButton}
          <input
            id="vol-control"
            type="range"
            min="0"
            max="100"
            step="1"
            value={this.state.volume}
            onInput={this.setVolume}
            onChange={this.setVolume}
          >
          </input>
        </div>
        <audio
          src={trackUrl}
          autoPlay={this.state.playing}
          id="the-music-player"
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
    queue: state.ui.musicPlayer.queue,
    upNext: state.ui.musicPlayer.upNext,
    modalType: state.ui.modal.modalType,
    queueName: state.ui.musicPlayer.queueName
  });
};

const mdp = dispatch => {
  return({
    togglePlay: () => dispatch(togglePlay()),
    clearUpNext: () => dispatch(clearUpNext()),
    openModal: modalInfo => dispatch(openModal(modalInfo))
  });
};

export default connect(msp, mdp)(MusicPlayer);
