import { connect } from 'react-redux';
import { login, demoLogin, receiveSessionErrors } from './../../actions/session_actions';
import React from 'react';
import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => {
  let errors = [];
  if (state.errors.session.errors) {
    errors = state.errors.session.errors;
  }
  return ({
    errors: errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user)),
  demoLogin: () => dispatch(demoLogin()),
  receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);