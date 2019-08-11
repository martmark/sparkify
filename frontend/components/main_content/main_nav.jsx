import React from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';


class mainNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="main-nav">
        <section className='main-nav-top'>
          <span className='nav-title'><Link to={'/browse'}>Sparkify</Link></span>
          <ul className="main-nav-links">
            <li key={1}>
              <NavLink 
                activeClassName='mn-active' 
                to={'/browse'}>
                  <i class="fas fa-home"></i>Home
              </NavLink>
            </li>
            <li key={2}>
              <NavLink 
                activeClassName='mn-active' 
                to={'/search'}>
                  <i class="fas fa-search"></i>Search
              </NavLink></li>
            <li key={3}>
              <NavLink
                activeClassName='mn-active'
                to={'/collection'}>
                  <i class="fas fa-stream"></i>Your Library
              </NavLink>
            </li>
          </ul>
        </section>
        <span className="main-nav-username">
          <Link to={'/settings/account'}>{this.props.currentUser.username}</Link>
        </span>
      </div>
    )
  }
}

export default mainNav;