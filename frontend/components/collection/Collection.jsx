import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import CollectionPlaylistIndex from './col_playlist_index';
import CollectionArtistIndex from './col_artist_index';
import CollectionSongIndex from './col_song_index';
import CollectionAlbumIndex from './col_album_index';
import CollectionNav from './collection_nav';

class Collection extends React.Component {

  render() {

      return (
        <div className='collection-window'>
          <CollectionNav />
          <Route exact path='/collection' render={() => <Redirect to='/collection/playlists' />} />
          <Route exact path="/collection/artists" component={CollectionArtistIndex} />
          <Route exact path="/collection/playlists" component={CollectionPlaylistIndex} />
          <Route exact path="/collection/albums" component={CollectionAlbumIndex} />
          <Route exact path="/collection/tracks" component={CollectionSongIndex} />
        </div>
      )   
  }
}

export default Collection;