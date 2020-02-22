import React from 'react';
import { connect } from 'react-redux';
import { createPlaylist } from './../../actions/playlist_actions';
import { closeModal } from './../../actions/modal_actions';
import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({title: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPlaylist(this.state)
      .then(() => this.props.closeModal());
  }

  render() {
    return (
      <div className="playlist-form-div">
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
        <form onSubmit={this.handleSubmit} className="playlist-form">
          <div className="playlist-form-input">
            <input
              type="text"
              value={this.state.title}
              className="playlist-name-input"
              onChange={this.updateTitle}
              placeholder={"Playlist Name"}
            />
          </div>
        </form>
        <div className="playlist-form-buttons">
          <button id="playlist-form-button" onClick={this.props.closeModal}>
            CANCEL
          </button>
          <button id="playlist-form-button" onClick={this.handleSubmit}>
            CREATE
          </button>
        </div>
      </div>
    );
  }
}

const mdp = (dispatch) => ({
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  closeModal: () => dispatch(closeModal())
})

export default connect(null, mdp)(PlaylistForm);