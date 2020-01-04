import React from "react";
import { connect } from "react-redux";
import { updatePlaylist } from "./../../actions/playlist_actions";
import { closeModal } from "./../../actions/modal_actions";
import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";

class EditPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.playlist.title };
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let title = this.state.title;
    let updatedPlaylist = { id: this.props.playlist.id, title }
    this.props.updatePlaylist(updatedPlaylist).then(() => this.props.closeModal());
  }

  render() {
    if (!this.state.title) return null;

    return (
      <div className="playlist-form-div">
        <div className="playlist-form-x">
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
          <button id="new-playlist-button" onClick={this.props.closeModal}>
            CANCEL
          </button>
          <button id="new-playlist-button" onClick={this.handleSubmit}>
            UPDATE
          </button>
        </div>
      </div>
    );
  }
}

const msp = state => {
  return {
    playlist: state.ui.modal.playlist
  }
}

const mdp = dispatch => ({
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist)),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(EditPlaylistForm);
