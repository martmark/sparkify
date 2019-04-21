import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Collection from './../collection/Collection';
import { AuthRoute, ProtectedRoute } from './../../util/route_util';
import PlaylistShowContainer from './../playlist/playlist_show_container';
import MainNav from './main_nav_container';
import GreetingContainer from './../browse/greeting_container';
import Page404 from '../page404';
import AlbumShow from './../album/album_show';
import SettingsContainer from './settings_container';
import ArtistShowContainer from './../artist/artist_show_container';
import ModalContainer from './modal_container';

const Main = () => (
  <div className='main-content'>
      <ModalContainer />
      <MainNav />
      <Route path="/browse" component={GreetingContainer} />
      <Route path="/search" component={GreetingContainer} />
      <Route path="/collection" component={Collection} />
      <Route path="/playlist/:playlistId" component={PlaylistShowContainer} />
      <Route path="/album/:albumId" component={AlbumShow} />
      <Route path="/artist/:artistId" component={ArtistShowContainer} />
      <Route path="/settings" component={SettingsContainer} />
  </div>
);

export default Main;
