import React from 'react';
import { Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from './../util/route_util';
import SplashContainer from './session/splash_container';
import GreetingContainer from './browse/greeting_container'

const App = () => (
  <div>
    <AuthRoute exact path="/" component={SplashContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/browse" component={GreetingContainer} />
  </div>
);

export default App;
