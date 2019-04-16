import React from 'react';
import { Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from './../util/route_util';
import Splash from './session/splash';

const App = () => (
  <div>
    <Route path="/" component={Splash} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
