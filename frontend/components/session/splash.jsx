import React from 'react';
import { Link } from 'react-router-dom';
import DemoLoginButton from './demo_login_button';

class Splash extends React.Component {

  render() {
    return (
      <div>
        <section>
          <h1>Music for everyone.</h1>
          <h3>Millions of songs. No credit card needed.</h3>
          <DemoLoginButton />
        </section>
      </div>
    );
  }
}

export default Splash;