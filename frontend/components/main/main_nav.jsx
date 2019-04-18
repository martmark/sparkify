import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';


class mainNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="main-nav">
        <ul className="main-nav-links">
          <li key={1}><Link to={'/browse'}>Browse</Link></li>
          <li key={2}><Link to={'/search'}>Search</Link></li>
          <li key={3}><Link to={'/collection'}>Library</Link></li>
        </ul>
        <Link to={'/settings/account'}><h1>{this.props.currentUser.username}</h1></Link>
      </div>
    )
  }
}

export default mainNav;