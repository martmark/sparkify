import React from 'react';

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
    this.props.createPlaylist(this.state)
      .then(() => this.props.closeModal());
  }

 

  render() {
    return(
      <div className='playlist-form-div'>
        <button id='playlist-form-x' onClick={this.props.closeModal}>x</button>
        <form onSubmit={this.handleSubmit} className="playlist-form">
          <div className='playlist-form-input'>
            <label>Playlist Name</label>
            <input type="text" value={this.state.title} id='playlist-name-input'
              onChange={this.updateTitle} placeholder={'Start typing...'}
            />
          </div>
        </form>
        <div className='playlist-form-buttons'>
          <button id='playlist-form-cancel' onClick={this.props.closeModal}>CANCEL</button>
          <button id='playlist-form-submit' onClick={this.handleSubmit}>CREATE</button>
        </div>
      </div>
    )
  }
}

export default PlaylistForm;