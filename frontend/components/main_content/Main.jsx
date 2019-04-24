import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Collection from './../collection/Collection';
import PlaylistShowContainer from '../playlist/playlist_show';
import MainNav from './main_nav_container';
import GreetingContainer from './../browse/greeting_container';
import AlbumShow from './../album/album_show';
import SettingsContainer from './settings_container';
import ArtistShow from './../artist/artist_show';
import ModalContainer from './modal_container';
import Browse from './../browse/browse';

const Main = () => (
  <div className='main-content'>
      <ModalContainer />
      <MainNav />
      <Route path="/browse" component={Browse} />
      <Route path="/search" component={GreetingContainer} />
      <Route path="/collection" component={Collection} />
      <Route path="/playlist/:playlistId" component={PlaylistShowContainer} />
      <Route path="/album/:albumId" component={AlbumShow} />
      <Route path="/artist/:artistId" component={ArtistShow} />
      <Route path="/settings" component={SettingsContainer} />
  </div>
);

export default Main;
