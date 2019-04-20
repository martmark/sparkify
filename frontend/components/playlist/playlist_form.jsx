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
        <form onSubmit={this.handleSubmit} className="playlist-form">
          <input id='playlist-form-input' type="text" value={this.state.title} onChange={this.updateTitle} placeholder={'Start typing...'}/>
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