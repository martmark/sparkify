import React from 'react';
import { Link } from 'react-router-dom';
import DemoLoginButton from './demo_login_button';

class Splash extends React.Component {

  render() {
    return (
      <div>
        <header className="splash-header">
          <nav className="nav-bar">
            <div className="splash-logo">
              <Link to="/" className="logo">
                <h1 className="header-logo">Sparkify</h1>
              </Link>
            </div>
            <ul className="header-list">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </ul>
          </nav>
        </header>
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