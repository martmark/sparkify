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
    console.log(props.currentSong);
    this.state = {
      playing: props.playing,
      currentSong: {
        currentTime: "0:00",
        ended: false,
        error: false,
        ...props.currentSong,
      },
      currentIdx: 0,
      queue: [],
      repeat: false,
      volume: 100,
      prevVolume: null,
      cursorPosition: 0,
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
    const musicPlayer = this.refs.musicPlayer;
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
            currentSong: {
              currentTime: '0:00',
              ...currentSong
            },
            origQueue: newProps.queue,
            origIndex: newProps.currentIdx,
            shuffleQueue: shuffledQueue,
            shuffleIdx: 0,
            cursorPosition: 0,
            queueName: newProps.queueName,
          })
        } else {
          this.setState({
            currentSong: {
              currentTime: '0:00',
              ...newProps.currentSong,
            },
            queue: newProps.queue,
            currentIdx: newProps.currentIdx,
            cursorPosition: 0,
            queueName: newProps.queueName
          });
        }
      } else {
        this.setState({
          currentSong: {
            currentTime: '0:00',
            ...newProps.currentSong,
          },
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

  // Can optionally take origIdx and shuffleIdx to allow reuse for shuffle
  setSong(newSong, origIdx, shuffleIdx) {
    this.refs.musicPlayer.src = newSong.track_url;
    this.play();
    this.setState({
      currentSong: {
        currentTime: 0.00,
        ...newSong,
      },
      cursorPosition: 0,
      playing: true,
      shuffleIdx,
      origIdx
    });
  }

  play() {
    if (this.state.currentSong.title === "" && this.state.upNext.length > 0) {
      const nextSong = this.state.upNext.shift();
      this.setSong(nextSong);
    } else {
      console.log(this.state.currentSong);
      const audioPromise = this.refs.musicPlayer.play();
      if (audioPromise !== undefined) {
        audioPromise.then().catch(e => null);
      }
    }
  }

  floatTimeToString(floatTime) {
    const minutes = Math.floor(floatTime / 60);
    const seconds = Math.floor(floatTime) % 60;
    const secStr = (seconds < 10 ? '0' + seconds : seconds);

    return minutes.toString() + ':' + secStr;
  }

  parseNewTime(floatCurTime, floatDuration) {
    return floatDuration * (floatCurTime / 1000);
  }

  pause() {
    const playerTime = this.refs.musicPlayer.currentTime
    this.setState({
      playing: false,
      currentTime: this.floatTimeToString(playerTime)
    });
    this.refs.musicPlayer.pause();
  }

  next() {
    if (this.state.repeat) {
      this.setState({ currentTime: 0.00, cursorPosition: 0 });
      this.play();
    } else {
      this.clickNext();
    }
  }

  clearSong() {
    this.pause();
    this.setState({
      currentIdx: 0,
      shuffleIdx: 0,
      currentSong: {
        title: '',
        duration: 0.00,
        track_url: '',
        currentTime: 0.00
      },
      cursorPosition: 0,
      playing: false
    });
  }

  clickNext() {
    const currentIdx = this.state.currentIdx;
    const queue = this.state.queue;
    if (this.state.upNext.length > 0) {
      const nextSong = this.state.upNext.shift();
      this.setSong(nextSong);

    // Handle the case where the current song is the last song in the queue.
    } else if ((this.state.shuffle && this.state.shuffleIdx == queue.length - 1)
      || currentIdx >= this.state.queue.length - 1) {

      this.clearSong();
    } else if (this.state.shuffle) {
      const nextIdx = this.state.shuffleIdx + 1;
      const nextSong = this.state.shuffleQueue[nextIdx];
      const origIdx = this.state.origQueue.indexOf(nextSong);

      this.setSong(nextSong, origIdx, nextIdx);
    } else {
      const newIdx = this.state.currentIdx + 1;

      this.setState({
        currentIdx: newIdx
      });

      this.setSong(this.state.queue[newIdx]);
    }

    if (this.props.modalType == 'queue') {
      this.showQueue();
    }
  }

  previous() {
    if (this.state.cursorPosition > 10) {
      this.setState({
        currentSong: {
          currentTime: '0:00'
        },
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
          currentSong: {
            currentTime: '0:00'
          },
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
    this.setVolume(0);
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

  setNewCursorPos(newTime) {
    const player = document.getElementById('the-music-player');
    newTime = (newTime === undefined ? player.currentTime : newTime);
    if (player.currentTime) {
      const newTimeFloat = this.parseNewTime(newTime, player.duration);
      const newTimeString = this.floatTimeToString(newTimeFloat);

      this.setState({ cursorPosition: newTimeFloat, currentTime: newTimeString });
    } else {
      this.setState({ cursorPosition: 0, currentTime: '0:00'});
    }
  }

  setCursorPosition() {
    if (this.state.playing) this.setNewCursorPos();
  }

  changeCursorPosition(e) {
    if (!player.currentTime) return;

    const newTimeFloat = this.parseNewTime(e.target.value, player.duration);
    const newTimeString = this.floatTimeToString(newTimeFloat);

    player.currentTime = newTimeFloat;
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
            <span className='current-time-display'>{ this.state.currentTime }</span>
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
            <span className='duration-display' id='durationspan'>{ this.state.currentSong.duration }</span>
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
          currentTime={ this.state.currentTime }
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
