import { connect } from 'react-redux';
import Settings from './settings';
import { logout } from './../../actions/session_actions';
import React from 'react';

const msp = state => {
  return ({
    currentUser: state.entities.users[state.session.currentUserId]
  });
};

const mdp = dispatch => {
  return({
    logout: () => dispatch(logout())
  });
};

export default connect(msp, mdp)(Settings);