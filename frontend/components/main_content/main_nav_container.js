import { connect } from 'react-redux';
import { logout } from './../../util/session_api_util';
import MainNav from './main_nav';
import React from 'react';

const msp = state => {
  return ({
    currentUser: state.entities.users[state.session.currentUserId]
  });
};

export default connect(msp)(MainNav);