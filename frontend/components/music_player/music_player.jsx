import React from 'react';
import { IconContext } from "react-icons";
import Song from './song.jsx';
import TrackInfo from './track_info.jsx';
import SeekBar from './seek_bar.jsx';
import QueueButton from './queue_button.jsx';
import ShuffleHandler from './shuffle_handler.jsx';
import VolumeControl from './volume_control.jsx';
import { clearUpNext } from './../../actions/music_actions';
import { openModal } from './../../actions/modal_actions';
import {
  BackButton,
  ForwardButton,
  ShuffleButton,
  RepeatButton
} from './media_buttons.jsx';

const EMPTY_SONG = {
  title: '',
  duration: "0:00",
  track_url: '',
  currentTime: 0.00,
  id: null,
  image_url: ''
};

const RESET_STATE = {
  currentIdx: 0,
  shuffleIdx: 0,
  queue: [],
  upNext: [],
  currentSong: EMPTY_SONG,
  reset: true,
  cursorPosition: 0,
  playing: false
};

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.musicPlayer = React.createRef();
    console.log(props);
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
      reset: false,
      volume: 100,
      prevVolume: null,
      cursorPosition: 0,
      upNext: [],
      origQueue: [],
      effectiveQueue: [],
      shuffleQueue: [],
      origIndex: null,
      currentPropSongId: props.currentSong.id,
      shuffleIdx: null,
      queueName: props.queueName
    };

    this.positionInterval = null;
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.clickNext = this.clickNext.bind(this);
    this.toggleRepeat = this.toggleRepeat.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);
    this.isntPlaying = this.isntPlaying.bind(this);
    this.showQueue = this.showQueue.bind(this);
    this.setEffectiveQueue = this.setEffectiveQueue.bind(this);
    this.removeFromQueue = this.removeFromQueue.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
    this.updateCursor = this.updateCursor.bind(this);
  }

  static getDerivedStateFromProps(newProps, state) {
    if (newProps.currentSong === undefined) return null;

    // There is an issue where if click previous through the first song in the
    // playlist the first song selected begins playing, rather than the playist
    // pausing and resetting as desired. This is happening because a click to
    // select a new song to intentionally restart the playlist is indistinguishable
    // from the initial click to select a song.

    if (newProps.upNext) {
      let newSong = newProps.upNext;
      let newUpNextArr = state.upNext.concat(newSong);
      return {
        upNext: newUpNextArr,
        showModel: (newProps.modalType == 'queue')
      };
    } else if ((state.currentPropSongId !== state.currentSong.id
      && !state.playing)
      || state.currentPropSongId !== newProps.currentSong.id
      || (state.queueName !== newProps.queueName)) {
      if (newProps.queue.length > 0) {
        if (state.shuffle) {
          const currentSong = newProps.currentSong;
          let shuffledQueue = shuffleArray(newProps.queue);
          const shuffledQueueIdx = shuffledQueue.indexOf(currentSong);
          shuffledQueue.splice(shuffledQueueIdx, 1);
          shuffledQueue.unshift(currentSong);
          return {
            currentSong: {
              currentTime: 0.00,
              ...currentSong
            },
            origQueue: newProps.queue,
            origIndex: newProps.currentIdx,
            shuffleQueue: shuffledQueue,
            playing: newProps.playing,
            shuffleIdx: 0,
            currentPropSongId: currentSong.id,
            cursorPosition: 0,
            queueName: newProps.queueName,
          };
        } else {
          console.log(state, newProps.currentSong);
          return {
            currentSong: {
              currentTime: 0.00,
              ...newProps.currentSong,
            },
            queue: newProps.queue,
            playing: newProps.playing,
            currentIdx: newProps.currentIdx,
            currentPropSongId: newProps.currentSong.id,
            cursorPosition: 0,
            queueName: newProps.queueName
          };
        }
      } else {
        return {
          currentSong: {
            currentTime: 0.00,
            ...newProps.currentSong,
          },
          playing: newProps.playing,
          cursorPosition: 0
        };
      }
      return { playing: newProps.playing };
    } else if (state.playing == false) {
      return {
        currentSong: {
          currentTime: 0.00,
          ...newProps.currentSong,
        },
        playing: newProps.playing,
        cursorPosition: 0
      };
    }
    return null;
  }

  componentWillUnmount() {
    clearInterval(this.positionInterval);
  }

  newSongState(newSong, currentIdx = 0) {
    return {
      currentSong: {
        currentTime: 0.00,
        ...newSong,
      },
      cursorPosition: 0,
      playing: true,
      currentIdx,
      shuffleIdx
    };
  }

  // Can optionally take origIdx and shuffleIdx to allow reuse for shuffle
  setSong(newSong, currentIdx) {
    this.setState(
      newSongState(newSong, currentIdx),
      () => {
        this.play()
      }
    );
  }

  setEffectiveQueue(newQueue, curIdx) {
    this.setState({
      effectiveQueue: newQueue,
      currentIdx: curIdx
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
      this.setState({
        playing: true,
      });
    }
  }

  // This needs to be called whenever state is reset to avoid locking up the
  // audio player
  unsetReset() {
    this.setState({reset: false})
  }

  resetPlaylist() {
    // Change reset state to default on next render
    this.setState(RESET_STATE, () => {
      this.unsetReset
    });
  }

  pause() {
    this.setState({ playing: false });
  }

  next() {
    if (this.state.repeat) {
      this.setState({ currentTime: 0.00, cursorPosition: 0 });
      this.play();
    } else {
      this.clickNext();
    }
  }

  clickNext() {
    this.setState(({ currentIdx, effectiveQueue, upNext }) => {
      if (upNext.length > 0) {
        let newUpNext = [...upnext];
        const nextSong = newUpNext.shift();
        return {
          ...newSongState(nextSong),
          upNext: newUpNext
        };

      // Handle the case where the current song is the last song in the effectiveQueue.
      } else if (currentIdx >= effectiveQueue.length - 1) {
        return RESET_STATE;
      } else {
        const newIdx = this.state.currentIdx + 1;

        this.setSong(effectiveQueue[newIdx], newIdx);
      }

      if (this.props.modalType == 'queue') {
        this.showQueue();
      }
    });
  }

  previous() {
    this.setState(({ currentIdx, effectiveQueue, song }) => {
      const newIdx = currentIdx - 1;
      // Handle the case where the last index was the first song in the queue
      if (newIdx < 0) {
        return RESET_STATE
      } else {
        return {
          currentIdx: newIdx
        };
      }
    },
      () => {
        this.unsetReset()
        const { currentIdx, effectiveQueue } = this.state;
        const newSong = queue[currentIdx];
        this.setSong(newSong, currentIdx);
      }
    );
  }

  toggleRepeat() {
    this.setState((oldState) => { repeat: !oldState.repeat });
  }

  // When toggle is turned on, the newIdx should be set to 0
  // When toggle is turned off, the newIdx should be set to the current song's
  // index in the original queue
  toggleShuffle(newIdx) {
    return this.setState(({ shuffle }) => {
      return {
        shuffle: !shuffle,
        currentIdx: newIdx
      }
    });
  }

  isntPlaying() {
    return !this.state.playing;
  }

  //TODOMAYBE: Rework this so that the modal is passed down as a prop and then
  //selectively render based on a renderModal boolean saved in state
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
    let newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }

  render() {
    const song = this.state.currentSong;

    return (
      <div className="music-player">
        <TrackInfo
          albumId={song.albumId}
          albumTitle={song.albumTitle}
          albumArt={song.image_url}
          artistId={song.artistId}
          artistName={song.artistName}
          songTitle={song.title}
          trackUrl={song.trackUrl}
        />
        <div className="music-player-center">
          <div className="music-player-controls">
            <ShuffleHandler
              setEffectiveQueue={this.setEffectiveQueue}
            />
            <BackButton gotoLastSong={this.previous} />
            <Song
              shouldPlay={this.state.playing}
              trackUrl={song.track_url}
              gotoNextSong={this.next}
              reset={this.state.reset}
            />
            <ForwardButton onClick={this.clickNext}/>
            <RepeatButton isOn={this.state.repeat} onClick={this.toggleRepeat} />
          </div>
          <SeekBar
            currentTime={song.currentTime}
            durationString={song.duration}
            updateContainerCursor={this.updateCursor}
          />
        </div>
        <div className="mp-volume-control">
          <QueueButton
            upNext={this.state.upNext}
            queue={this.state.queue}
            onClick={this.showQueue}
          />
          <VolumeControl />
        </div>
      </div>
    );
  }
}

