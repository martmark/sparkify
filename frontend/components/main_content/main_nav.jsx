import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { IconContext } from "react-icons";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic
} from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";


class mainNav extends React.Component {
  constructor(props) {
    super(props);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.linkToBrowse = this.linkToBrowse.bind(this);
    this.linkToLibrary = this.linkToLibrary.bind(this);
    this.linkToSearch = this.linkToSearch.bind(this);
    this.linkToSettings = this.linkToSettings.bind(this);
  }

  openMenu() {
    let mobileNav = document.getElementById('mobilenav');
    mobileNav.classList.toggle('hidden');
  }

  closeMenu() {
    let mobileNav = document.getElementById('mobilenav');
    mobileNav.classList.add('hidden');
  }

  linkToBrowse() {
    this.closeMenu();
    this.props.history.push('/browse');
  }

  linkToSearch() {
    this.closeMenu();
    this.props.history.push('/search');
  }

  linkToLibrary() {
    this.closeMenu();
    this.props.history.push('/collection');
  }

  linkToSettings() {
    this.closeMenu();
    this.props.history.push('/settings/account');
  }

  render() {
    return (
      <div className="main-nav">
        <section className="main-nav-top">
          <span className="nav-title">
            <Link to={"/browse"}>Sparkify</Link>
          </span>
          <ul className="main-nav-links">
            <li key={1} className="main-nav-link-outer">
              <NavLink
                className="main-navlink"
                activeClassName="mn-active"
                to={"/browse"}
              >
                <div className="main-nav-link-inner">
                  <div className="main-nav-icon">
                    <IconContext.Provider
                      value={{
                        className: "main-nav-icon-inner reacticon",
                        size: "1.5em"
                      }}
                    >
                      <MdHome />
                    </IconContext.Provider>
                  </div>
                  <span className="main-nav-link-title">Home</span>
                </div>
              </NavLink>
            </li>
            <li key={2} className="main-nav-link-outer">
              <NavLink
                className="main-navlink"
                activeClassName="mn-active"
                to={"/search"}
              >
                <div className="main-nav-link-inner">
                  <div className="main-nav-icon">
                    <IconContext.Provider
                      value={{
                        className: "main-nav-icon-inner reacticon",
                        size: "1.5em"
                      }}
                    >
                      <MdSearch />
                    </IconContext.Provider>
                  </div>
                  <span className="main-nav-link-title">Search</span>
                </div>
              </NavLink>
            </li>
            <li key={3} className="main-nav-link-outer">
              <NavLink
                className="main-navlink"
                activeClassName="mn-active"
                to={"/collection"}
              >
                <div className="main-nav-link-inner">
                  <div className="main-nav-icon">
                    <IconContext.Provider
                      value={{
                        className: "main-nav-icon-inner reacticon",
                        size: "1.5em"
                      }}
                    >
                      <MdLibraryMusic />
                    </IconContext.Provider>
                  </div>
                  <span className="main-nav-link-title">Your Library</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </section>
        <span className="main-nav-username">
          <ul>
            <li key={3} className="main-nav-link-outer">
              <NavLink
                className="main-navlink"
                activeClassName="mn-active"
                to={"/settings/account"}
              >
                <div className="main-nav-link-inner">
                  <div className="main-nav-icon">
                    <IconContext.Provider
                      value={{
                        className: "main-nav-icon-inner reacticon",
                        size: "1.5em"
                      }}
                    >
                      <FiUser />
                    </IconContext.Provider>
                  </div>
                  <span className="main-nav-link-title">
                    {this.props.currentUser.username}
                  </span>
                </div>
              </NavLink>
            </li>
          </ul>
        </span>
        <div className="hamburgerdiv desktop-hidden">
          <IconContext.Provider
            value={{
              className: "hamburgericon reacticon",
              size: "1.5em"
            }}
          >
            <GiHamburgerMenu onClick={this.openMenu}/>
          </IconContext.Provider>
        </div>
        <div 
          id='mobilenav' 
          className='mobile-nav-outer desktop-hidden hidden'
          onClick={this.closeMenu}
        >
          <div className='mobile-nav-inner' onClick={e => e.stopPropagation()}>
            <ul className='mobile-nav-list'>
              <li key='1' onClick={this.linkToBrowse}>
                Browse
              </li>
              <li key='2' onClick={this.linkToSearch}>
                Search
              </li>
              <li key='3' onClick={this.linkToLibrary}>
                Your Library
              </li>
              <li key='4' onClick={this.linkToSettings}>
                {this.props.currentUser.username}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(mainNav);