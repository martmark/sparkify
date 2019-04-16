import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.demoLogin = this.demoLogin.bind(this);

  // }

  

  render() {
    return (
      <div className="splash">
        <header className="splash-header">
          <nav className="splash-nav">
            <div className="splash-logo">
              <Link to="/" className="logo">
                <h1 className="header-logo">Sparkify</h1>
              </Link>
            </div>
            <ul className="splash-header-list">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </ul>
          </nav>
        </header>

        <section className="splash-main">
          <h1>Music for everyone.</h1>
          <h4>Millions of songs. No credit card needed.</h4>
          <button onClick={this.props.demoLogin}>LOG IN AS DEMO USER</button>
          
        </section>
      </div>
    );
  }
}

export default Splash;