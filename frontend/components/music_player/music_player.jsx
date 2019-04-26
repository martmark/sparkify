import React from 'react';
import { connect } from 'react-redux';
import { togglePlay } from './../../actions/music_actions';

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
  }

  componentDidMount() {
    let musicPlayer = this.refs.musicPlayer;
    musicPlayer.addEventListener('ended', this.next);
    musicPlayer.addEventListener('error', this.next);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.currentSong.id !== newProps.currentSong.id) this.pause();
    this.setState({ currentSong: newProps.currentSong, queue: newProps.queue });
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
    let current = this.s
  }

  render() {

    return (
      <div>
        <h1>{this.state.currentSong.title}</h1>
        <button onClick={this.play}>Sing For Richard</button>
        <button onClick={this.pause}>Pause</button>

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