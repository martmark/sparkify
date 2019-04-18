import React from 'react';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelCreate = this.cancelCreate.bind(this);
  }

  updateTitle(e) {
    this.setState({title: e.target.value});
  }

  handleSubmit(e) {
    this.props.createPlaylist(this.state);
  }

  cancelCreate() {
    this.setState({title: ''});
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} className="playlist-form">
          <input type="text" value={this.state.title} onChange={this.updateTitle} placeholder={'Start typing...'}/>
        </form>
        <button onClick={this.cancelCreate}>CANCEL</button>
        <button onClick={this.handleSubmit}>CREATE</button>
      </div>
    )
  }
}

export default PlaylistForm;