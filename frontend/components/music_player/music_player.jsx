import React from 'react';
import { connect } from 'react-redux';
import { togglePlay } from './../../actions/music_actions';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import Song from './song';
import SeekBar from './seek_bar.jsx';
import { clearUpNext } from './../../actions/music_actions';
import { openModal } from './../../actions/modal_actions';
import { BackButton, ShuffleButton, RepeatButton } from './media_buttons.jsx';

import {
  MdSkipNext,
  MdSkipPrevious,
  MdQueueMusic
} from "react-icons/md";
import {
  IoIosRepeat,
  IoMdVolumeHigh,
  IoMdVolumeOff
} from 'react-icons/io';


class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.musicPlayer = React.createRef();
    this.state = {
      playing: props.playing,
      currentSong: {
        ended: false,
        error: false,
        duration: "0:00",
        ...props.currentSong,
        currentTime: 0.00,
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
      queueName: null
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
    this.isntPlaying = this.isntPlaying.bind(this);
    this.showQueue = this.showQueue.bind(this);
    this.removeFromQueue = this.removeFromQueue.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
    this.updateCursor = this.updateCursor.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.upNext) {
      let newSong = newProps.upNext;
      let newUpNextArr = this.state.upNext.concat(newSong);
      this.setState({
        upNext: newUpNextArr
      }, () => {
        this.props.clearUpNext();
        if (newProps.modalType == 'queue') this.showQueue();
      });
    } else if ((this.props.currentSong.id !== newProps.currentSong.id)
      || (this.props.queueName !== newProps.queueName)) {
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
              currentTime: 0.00,
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
              currentTime: 0.00,
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
            currentTime: 0.00,
            ...newProps.currentSong,
          },
          cursorPosition: 0
        });
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

  updateCursor(newCursor) {
    this.setState({ cursorPosition: newCursor });
  }

  play() {
    if (this.state.currentSong.title === "" && this.state.upNext.length > 0) {
      const nextSong = this.state.upNext.shift();
      this.setSong(nextSong);
    } else {
      console.log(this.state.currentSong);
      this.setState({ playing: true });
    }
  }

  pause() {
    this.setState({ playing: false });
    //this.refs.musicPlayer.pause();
  }

  next() {
    if (this.state.repeat) {
      this.setState({ currentTime: 0.00, cursorPosition: 0 });
      this.play();
    } else {
      this.clickNext();
    }
  }

  resetPlaylist() {
    this.pause();
    this.setState({
      currentIdx: 0,
      shuffleIdx: 0,
      currentSong: {
        title: '',
        duration: "0:00",
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

      this.resetPlaylist();
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
    if (!this.state.shuffle) {
      let currentIdx = this.state.currentIdx;
      if (currentIdx === 0) {
        this.resetPlaylist();
      } else {
        const newIdx = currentIdx - 1;
        const newSong = this.state.queue[newIdx];
        this.setSong(newSong);
        this.setState({ currentIdx: newIdx });
        this.play();
      }
    } else if (this.state.shuffle) {
      let shuffleIndex = this.state.shuffleIdx;
      if (shuffleIndex === 0) {
        this.pause();
        this.setState({
          currentTime: 0.00,
          cursorPosition: 0
        })
      } else {
        this.setState(({ shuffleQueue, shuffleIdx }) => ({
          shuffleIdx: shuffleInx - 1,
          currentSong: shuffleQueue[shuffleIdx - 1],
          currentTime: 0.00,
          cursorPosition: 0
        }));
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
    this.setState({ volume: e.target.value });
  }

  mutePlayer() {
    this.setState(({ volume }) => ({
      volume: 0,
      prevVolume: volume
    }));
  }

  unmutePlayer() {
    this.setState(({prevVolume}) => {
      const newVol = (prevVolume ? prevVolume : 50);
      return {volume: newVol, prevVolume: null }
    });
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
    let volumeButton;

    if (this.state.volume > 0) {
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
            <ShuffleButton isOn={this.state.shuffle} onClick={this.toggleShuffle} />
            <BackButton gotoLastSong={this.previous}/>
            <Song
              shouldPlay={this.state.playing}
              trackUrl={this.state.currentSong.track_url}
              gotoNextSong={this.next}
              desiredVolume={this.state.volume}
            />
            <IconContext.Provider
              value={{ className: "play-icon reacticon", size: "2em" }}
            >
              <MdSkipNext onClick={this.clickNext} />
            </IconContext.Provider>
            <RepeatButton isOn={this.state.repeat} onClick={this.toggleRepeat} />
          </div>
          <SeekBar
            currentTime={this.state.currentSong.currentTime}
            durationString={this.state.currentSong.duration}
            updateContainerCursor={this.updateCursor}
          />
        </div>
        <div className="mp-volume-control">
          {queueButton}
          {volumeButton}
          <input
            id="vol-control"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={this.state.volume}
            onInput={this.setVolume}
            onChange={this.setVolume}
          >
          </input>
        </div>
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
