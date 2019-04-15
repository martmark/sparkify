import { connect } from 'react-redux';
import { signup } from './../../actions/session_actions';
import React from 'react';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  let errors = [];
  if (state.errors.session.errors) {
    errors = state.errors.session.errors;
  }
  return ({
    errors: errors,
    formType: "sign up"
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);