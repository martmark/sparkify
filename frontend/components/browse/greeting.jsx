import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div style={{ textAlign: 'center', fontSize: '24px' }}>
        <br />
        <p>Welcome to Sparkify, {this.props.currentUser.username}!</p>
        <br/>
        <p>Obviously, there is more content coming.</p>
        <br/>
        <button className="green-link" onClick={this.props.logout}>Log Out</button>
      </div>)
  }

}

export default Greeting;