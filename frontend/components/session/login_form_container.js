import { connect } from 'react-redux';
import { login } from './../../actions/session_actions';
import React from 'react';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {

  let errors = [];
  if (state.errors.session.errors) {
    errors = state.errors.session.errors;
  }

  return ({
    errors: errors,
    formType: "log in"
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);