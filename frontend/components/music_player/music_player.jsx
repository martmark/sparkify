import React from 'react';
import PlayQueue from './play_queue.jsx';

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reset: false };
    this.resetPlaylist = this.resetPlaylist.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.reset && this.props !== prevProps) {
      this.setState({ reset: false });
    }
  }

  resetPlaylist() {
    this.setState({ reset: true });
  }

  render() {
    const {
      currentSong,
      playing,
      queue,
      queueName,
      upNext,
      currentIdx
    } = this.props;

    const usingUpNext = upNext && upNext.length > 0;
    const origQueue = (usingUpNext ? upNext : queue);
    const effectiveQueue = origQueue.slice(currentIdx + 1);
    const prevSongs = origQueue.slice(0, currentIdx);

    // There is an issue where you cannot restart the playlist form the
    // initial starting song. This is because of the currentSong.id that is set
    // on the last line
    return (
      <div className="music-player">
        <PlayQueue
          playing={playing && !this.state.reset}
          queueName={queueName}
          usingUpNext={usingUpNext}
          startingSong={currentSong}
          startingPrevSongs={prevSongs}
          origQueue={origQueue}
          startingQueue={effectiveQueue}
          resetPlaylist={this.resetPlaylist}
          key={(this.state.reset ? -1 : currentSong.id)}
        />
      </div>
    );
  }
}

