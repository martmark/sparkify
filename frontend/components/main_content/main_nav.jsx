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
            <li key={1} className='main-nav-link-outer'>
              <NavLink 
                className='main-navlink'
                activeClassName='mn-active' 
                to={'/browse'}>
                  <div className='main-nav-link-inner'>
                    <div className='main-nav-icon'>
                      <i className="fas fa-home"></i>
                    </div>
                    <span className='main-nav-link-title'>Home</span>
                  </div>  
              </NavLink>
            </li>
            <li key={2} className='main-nav-link-outer'>
              <NavLink 
                className='main-navlink'
                activeClassName='mn-active' 
                to={'/search'}>
                  <div className='main-nav-link-inner'>
                    <div className='main-nav-icon'>
                      <i className="fas fa-search"></i>
                    </div>
                    <span className='main-nav-link-title'>Search</span>
                  </div>
              </NavLink>
            </li>
            <li key={3} className='main-nav-link-outer'>
              <NavLink
                className='main-navlink'
                activeClassName='mn-active'
                to={'/collection'}>
                  <div className='main-nav-link-inner'>
                    <div className='main-nav-icon'>
                      <i className="fas fa-stream"></i>
                    </div>
                    <span className='main-nav-link-title'>Your Library</span>
                  </div>
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