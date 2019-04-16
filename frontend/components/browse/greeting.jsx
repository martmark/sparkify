import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
      return (<div>
        <p>Welcome to Sparkify, {this.props.currentUser.username}!</p>
        <br/><br/>
        <p>Obviously, there is more content coming.</p>
        <br/><br/>
        <button onClick={this.props.logout}>Log Out</button>
      </div>)
  }

}

export default Greeting;