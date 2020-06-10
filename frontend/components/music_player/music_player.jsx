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

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
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
      volume: 1,
      cursorPosition: 0,
      prevSongs: [],
      upNext: [],
      origQueue: [],
      effectiveQueue: [],
      origIndex: null,
      currentPropSongId: props.currentSong.id,
      queueName: props.queueName
    };

    this.EMPTY_SONG = (props.currentSong ? props.currentSong : {
      title: '',
      duration: "0:00",
      track_url: '',
      currentTime: 0.00,
      id: null,
      image_url: ''
    });

    this.RESET_STATE = {
      currentIdx: 0,
      queue: [],
      upNext: [],
      currentSong: this.EMPTY_SONG,
      reset: true,
      cursorPosition: 0,
      playing: false
    };


    this.positionInterval = null;
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.clickNext = this.clickNext.bind(this);
    this.toggleRepeat = this.toggleRepeat.bind(this);
    this.isntPlaying = this.isntPlaying.bind(this);
    this.setPlaying = this.setPlaying.bind(this);
    this.showQueue = this.showQueue.bind(this);
    this.setEffectiveQueue = this.setEffectiveQueue.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.removeFromQueue = this.removeFromQueue.bind(this);
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
        console.log(state, newProps.currentSong);
        return {
          currentSong: {
            currentTime: 0.00,
            ...newProps.currentSong,
          },
          queue: newProps.queue,
          effectiveQueue: newProps.queue,
          playing: newProps.playing,
          currentIdx: newProps.currentIdx,
          currentPropSongId: newProps.currentSong.id,
          cursorPosition: 0,
          queueName: newProps.queueName
        };
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

  newSongState(newSong) {
    return {
      currentSong: {
        currentTime: 0.00,
        ...newSong,
      },
      cursorPosition: 0,
      playing: true
    };
  }

  setPlaying(isPlaying) {
    this.setState({
      playing: isPlaying
    });
  }

  setVolume(newVol) {
    this.setState({
      volume: newVol
    });
  }

  setSong(newSong) {
    this.setState(
      this.newSongState(newSong),
      () => {
        this.play()
      }
    );
  }

  setEffectiveQueue(newQueue) {
    this.setState({
      effectiveQueue: newQueue
    }, () => console.log(this.state.effectiveQueue));
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
    this.setState(({ currentIdx, currentSong, effectiveQueue, prevSongs, upNext }) => {
      if (upNext.length > 0) {
        let newUpNext = [...upNext];
        const nextSong = newUpNext.shift();
        let newPrevSongs = [...prevSongs];

        if (currentSong && currentSong.id) {
          newPrevSongs.push(currentSong);
        }

        return {
          ...this.newSongState(nextSong),
          upNext: newUpNext
        };

      // Handle the case where the current song is the last song in the effectiveQueue.
      } else if (effectiveQueue.length === 0) {
        return this.RESET_STATE;
      } else {
        const newEffectiveQueue = effectiveQueue.slice(1);
        const newSong = effectiveQueue[0];
        let newPrevSongs = [...prevSongs];

        if (currentSong && currentSong.id) {
          newPrevSongs.push(newSong);
        }

        return {
          ...this.newSongState(newSong),
          effectiveQueue: newEffectiveQueue,
          previous: newPrevSongs
        };
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
        const newSong = effectiveQueue[currentIdx];
        this.setSong(newSong, currentIdx);
      }
    );
  }

  toggleRepeat() {
    this.setState((oldState) => { repeat: !oldState.repeat });
  }

  isntPlaying() {
    return !this.state.playing;
  }

  //TODOMAYBE: Rework this so that the modal is passed down as a prop and then
  //selectively render based on a renderModal boolean saved in state
  showQueue() {
    // debugger;
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

  removeFromQueue(idx) {
    this.state.upNext.splice(idx, 1);
    this.showQueue();
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
              origQueue={this.state.queue}
              setEffectiveQueue={this.setEffectiveQueue}
              effectiveQueue={this.effectiveQueue}
              currentIdx={this.state.currentIdx}
            />
            <BackButton gotoLastSong={this.previous} />
            <Song
              shouldPlay={this.state.playing}
              setContainerPlaying={this.setPlaying}
              trackUrl={song.track_url}
              persistentVolume={this.state.volume}
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
          <VolumeControl
            persistentVolume={this.state.volume}
            setPersistentVolume={this.setVolume}
            songId={song.id}
          />
        </div>
      </div>
    );
  }
}

