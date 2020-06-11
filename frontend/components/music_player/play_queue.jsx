import React from 'react';
import Song from './song.jsx';
import TrackInfo from './track_info.jsx';
import SeekBar from './seek_bar.jsx';
import QueueButton from './queue_button.jsx';
import ShuffleHandler from './shuffle_handler.jsx';
import VolumeControl from './volume_control.jsx';
import {
  BackButton,
  ForwardButton,
  ShuffleButton,
  RepeatButton
} from './media_buttons.jsx';
import { openModal } from './../../actions/modal_actions';
import { clearUpNext } from './../../actions/music_actions';

export default class PlayQueue extends React.Component {
  constructor(props) {
    super(props);
    console.log("Re-render PlayQueue");

    this.state = {
      playing: props.playing,
      currentSong: props.startingSong,
      currentIdx: 0,
      repeat: false,
      reset: false,
      volume: 1,
      startingQueue: props.startingQueue,
      queue: props.startingQueue,
      prevSongs: props.startingPrevSongs,
      effectiveQueue: props.startingQueue
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


    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.clickNext = this.clickNext.bind(this);
    this.toggleRepeat = this.toggleRepeat.bind(this);
    this.setPlaying = this.setPlaying.bind(this);
    this.togglePlaying = this.togglePlaying.bind(this);
    this.showQueue = this.showQueue.bind(this);
    this.setEffectiveQueue = this.setEffectiveQueue.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.removeFromQueue = this.removeFromQueue.bind(this);
    this.updateCursor = this.updateCursor.bind(this);
  }

  static getDerivedStateFromProps(newProps, state) {
    if (newProps.currentSong === undefined) return null;

    if (newProps.currentSong.id !== state.currentSong.id
      || newProps.queue !== state.startingQueue) {
      const newPrevSongs = newProps.queue.slice(0, newProps.currentIdx);
      const newQueue = newProps.queue.slice(newProps.currentIdx + 1);
      return {
        currentSong: newProps.currentSong,
        prevSongs: newPrevSongs,
        queue: newQueue,
        effectiveQueue: newQueue,
        playing: newProps.playing,
        currentIdx: 0,
        cursorPosition: 0,
        queueName: newProps.queueName
      };
    } else if (newProps.playing) {
      return { playing: newProps.playing};
    } else {
      return null;
    }
  }

  newSongState(newSong) {
    return {
      currentSong: newSong,
      cursorPosition: 0,
      playing: true
    };
  }

  setPlaying(isPlaying) {
    this.setState({
      playing: isPlaying
    });
  }

  togglePlaying() {
    this.setState(({ playing }) => {
      playing: !playing
    }, () => console.log(this.state.playing));
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

  setEffectiveQueue(newQueue, newPrevious = []) {
    this.setState({
      effectiveQueue: newQueue,
      prevSongs: newPrevious
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
    this.setState(({ currentSong, effectiveQueue, prevSongs, upNext }) => {
      if (effectiveQueue.length > 0) {
        const newSong = effectiveQueue[0];
        const newEffectiveQueue = effectiveQueue.slice(1);
        const newPrevSongs = [...prevSongs];

        if (currentSong && currentSong.id) {
          newPrevSongs.push(currentSong);
        }

        return {
          ...this.newSongState(newSong),
          effectiveQueue: newEffectiveQueue,
          prevSongs: newPrevSongs
        };
      // Handle case where the current song is the last song
      } else {
        this.props.resetPlaylist();
        return this.RESET_STATE;
      }

      if (this.props.modalType == 'queue') {
        this.showQueue();
      }
    });
  }

  previous() {
    this.setState(({ effectiveQueue, prevSongs, song }) => {
      // Handle the case where there is no song to go back to
      if (prevSongs.length === 0) {
        this.props.resetPlaylist();
        return this.RESET_STATE;
      }

      const newEffectiveQueue = [song, ...effectiveQueue];

      const newPrevSongs = [...prevSongs];
      console.log(newPrevSongs, newEffectiveQueue);
      const newSong = newPrevSongs.pop();

      return {
        ...this.newSongState(newSong),
        prevSongs: newPrevSongs,
        effectiveQueue: newEffectiveQueue,
        queue: newEffectiveQueue
      };
    },
      () => {
        console.log(
          this.state.prevSongs,
          this.state.currentSong,
          this.state.effectiveQueue
        )
      }
    );
  }

  toggleRepeat() {
    this.setState((oldState) => { repeat: !oldState.repeat });
  }

  //TODOMAYBE: Rework this so that the modal is passed down as a prop and then
  //selectively render based on a renderModal boolean saved in state
  showQueue() {
    // debugger;
    let normalQueue = this.state.queue.filter((_, idx) => idx > this.state.currentIdx);
    this.props.openModal({
      modalType: 'queue',
      upNext: this.state.upNext,
      removeFromQueue: this.removeFromQueue,
      normalQueue,
      queueName: this.props.queueName
    });
  }

  removeFromQueue(idx) {
    this.state.upNext.splice(idx, 1);
    this.showQueue();
  }

  render() {
    const song = this.state.currentSong;

    return (
      <React.Fragment>
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
              origQueue={this.props.origQueue}
              currentSong={song}
              setEffectiveQueue={this.setEffectiveQueue}
              effectiveQueue={this.effectiveQueue}
            />
            <BackButton gotoLastSong={this.previous} />
            <Song
              shouldPlay={this.state.playing}
              setContainerPlaying={this.setPlaying}
              toggleShouldPlay={this.togglePlaying}
              setShouldPlay={this.setPlaying}
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
            usingUpNext={this.state.usingUpNext}
            queue={this.state.queue}
            onClick={this.showQueue}
          />
          <VolumeControl
            persistentVolume={this.state.volume}
            setPersistentVolume={this.setVolume}
            songId={song.id}
          />
        </div>
      </React.Fragment>
    );
  }
}

