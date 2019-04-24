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
        <p>Welcome to Sparkify, dear {this.props.currentUser.username}.</p>
        <br/>
        <p>Hopefully the search feature will work soon.</p>
        <br/>
        <p>Check back tomorrow.</p>
        <br />
        <button className="green-link" onClick={this.props.logout}>Log Out</button>
      </div>)
  }

}

export default Greeting;