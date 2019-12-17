import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { closeModal } from "./../../actions/modal_actions";
import React from 'react';
import SongIndex from '../song/song_index';
import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";

class QueueSongIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.upNext.length < 1 && this.props.normalQueue.length < 1) {
      this.props.closeModal();
    }
  }

  render() {
    let upNextSongIndex;
    if (this.props.upNext.length > 0) {
      upNextSongIndex = <div className="queuemodal-upnext">
        <h1>Up Next</h1>
        <SongIndex
          songs={this.props.upNext}
          indexType="queue"
          removeFromQueue={this.props.removeFromQueue}
        />
      </div>;
    }

    let normalQueueSongIndex;
    if (this.props.normalQueue.length > 0) {
      normalQueueSongIndex = <div className="queuemodal-normal">
        <h1>{`Playing from ${this.props.queueName}`}</h1>
        <SongIndex
          songs={this.props.normalQueue}
          indexType="notqueue"
          // removeFromQueue={this.props.removeFromQueue}
        />
      </div>;
    }

    if (this.props.normalQueue.length === 0 && this.props.upNext.length === 0) {
      return (
        <h2>Nothing in Queue.</h2>
      );
    }
    
    return (
      <div className="queue-outer">
        <div className='playlist-form-x'>
          <IconContext.Provider
            value={{
              className: "reacticon",
              size: "1.75em"
              // color: 'white'
              // color: "rgb(30,167,73)"
            }}
          >
            <MdClose onClick={this.props.closeModal} />
          </IconContext.Provider>
        </div>
        <div className="queue-songs">
          {upNextSongIndex}
          {normalQueueSongIndex}
        </div>
      </div>
    )
  }
}

const msp = state => {
  return {
    upNext: state.ui.modal.upNext,
    normalQueue: state.ui.modal.normalQueue,
    removeFromQueue: id => state.ui.modal.removeFromQueue(id),
    queueName: state.ui.modal.queueName
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(QueueSongIndex);