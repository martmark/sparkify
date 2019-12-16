import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { closeModal } from "./../../actions/modal_actions";
import React from 'react';
import SongIndex from '../song/song_index';

class QueueSongIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.upNext.length < 1) {
      this.props.closeModal();
    }
  }

  render() {
    return (
      <div className="queue-songs">
        <h1>Up Next</h1>
        <SongIndex
          songs={this.props.upNext}
          indexType="queue"
          removeFromQueue={this.props.removeFromQueue}
        />
      </div>
    )
  }
}

const msp = state => {
  return {
    upNext: state.ui.modal.upNext,
    removeFromQueue: id => state.ui.modal.removeFromQueue(id)
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(QueueSongIndex);