import React from 'react';

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
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;