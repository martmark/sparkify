import React from 'react';
import { IconContext } from "react-icons";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="account-settings">
        <div className="settings-inner">
          <button className="logout-button" onClick={this.props.logout}>
            LOGOUT
          </button>
          <div>
            <p>
              Sparkify is a non-commercial clone of Spotify<br></br> built by Martin Markaj.
            </p>
            <p>
              React / Redux<br></br>
              Ruby on Rails<br></br>
              PostgreSQL
            </p>
          </div>
          <div className='contact-icons'>
            <IconContext.Provider
              value={{ className: "reacticon", size: "3.4em" }}
            >
              <a href="https://www.linkedin.com/in/martinmarkaj" target="_blank">
                <IoLogoLinkedin />
              </a>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ className: "reacticon", size: "3em" }}
            >
              <a href="https://github.com/martmark" target="_blank">
                <IoLogoGithub />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;