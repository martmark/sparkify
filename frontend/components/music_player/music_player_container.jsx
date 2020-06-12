import MusicPlayer from './music_player.jsx';
import { connect } from 'react-redux';

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
