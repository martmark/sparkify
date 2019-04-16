import { connect } from 'react-redux';
import { login, demoLogin } from './../../actions/session_actions';
import React from 'react';
import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => {

  let errors = [];
  if (state.errors.session.errors) {
    errors = state.errors.session.errors;
  }

  return ({
    errors: errors,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user)),
  demoLogin: () => dispatch(demoLogin())
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);