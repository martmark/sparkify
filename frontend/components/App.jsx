import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from './../util/route_util';
import SplashContainer from './session/splash_container';
import Page404 from './page404';
import Main from './main/Main';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/browse" component={Main} />
      <ProtectedRoute path="/search" component={Main} />
      <ProtectedRoute path="/collection" component={Main} />
      <ProtectedRoute path="/playlist" component={Main} />
      <ProtectedRoute path="/album" component={Main} />
      <ProtectedRoute path="/settings" component={Main} />
      <Route component={Page404} />
    </Switch>
  </div>
);

export default App;
