import { connect } from 'react-redux';
import { logout } from './../actions/session_actions';
import MainNav from './main_nav';
import React from 'react';

const mapStateToProps = state => {
  return ({
    currentUser: state.entities.users[state.session.currentUserId]
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(MainNav);