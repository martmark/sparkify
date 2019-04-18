import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PlaylistIndexContainer from './../playlist/playlist_index_container';
import CollectionNav from './collection_nav';



const Collection = () => (
  <div>
    <CollectionNav />
    <Route path="/collection" component={PlaylistIndexContainer} />
  </div>
);

export default Collection;