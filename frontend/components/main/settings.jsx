import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='account-settings'>
        <button className="logout-button" onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
}

export default Settings;