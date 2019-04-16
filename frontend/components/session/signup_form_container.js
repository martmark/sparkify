import { connect } from 'react-redux';
import { signup, demoLogin } from './../../actions/session_actions';
import React from 'react';
import SignupForm from './signup_form';

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
  signup: (user) => dispatch(signup(user)),
  demoLogin: () => dispatch(demoLogin())
});


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);