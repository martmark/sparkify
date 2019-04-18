import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Collection from './collection/Collection';
import { AuthRoute, ProtectedRoute } from './../util/route_util';
import PlaylistShowContainer from './playlist/playlist_show_container';
import MainNav from './main_nav_container';
import GreetingContainer from './browse/greeting_container'
import Page404 from './page404';

const Main = () => (
  <div>
    
      <MainNav />
      <Route path="/browse" component={GreetingContainer} />
      <Route path="/collection" component={Collection} />
      <Route path="/playlist/:playlistId" component={PlaylistShowContainer} />
      
    
  </div>
);

export default Main;
