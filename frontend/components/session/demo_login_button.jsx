import React from 'react';
import { demoLogin } from './../../actions/session_actions';


class DemoLoginButton extends React.Component {

  demoClick() {
    demoLogin();
  }

  render() {
    return (
      <div>
        <button onClick={this.demoClick}>Log in as Demo User</button>
      </div>
    )
  }
}

export default DemoLoginButton;