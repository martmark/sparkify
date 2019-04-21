import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Collection from './../collection/Collection';
import { AuthRoute, ProtectedRoute } from './../../util/route_util';
import PlaylistShowContainer from '../playlist/playlist_show';
import MainNav from './main_nav_container';
import GreetingContainer from './../browse/greeting_container';
import Page404 from '../page404';
import AlbumShow from './../album/album_show';
import SettingsContainer from './settings_container';
import ArtistShow from './../artist/artist_show';
import ModalContainer from './modal_container';

const Main = () => (
  <div className='main-content'>
      <ModalContainer />
      <MainNav />
      <Switch>
        <Route path="/browse" component={GreetingContainer} />
        <Route path="/search" component={GreetingContainer} />
        <Route path="/collection" component={Collection} />
        <Route path="/playlist/:playlistId" component={PlaylistShowContainer} />
        <Route path="/album/:albumId" component={AlbumShow} />
        <Route path="/artist/:artistId" component={ArtistShow} />
        <Route path="/settings" component={SettingsContainer} />
      </Switch>
  </div>
);

export default Main;
