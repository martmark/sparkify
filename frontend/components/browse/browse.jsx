import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import BrowsePlaylistIndex from './browse_playlist_index';
import BrowseSongIndex from './browse_song_index';
import BrowseAlbumIndex from './browse_album_index';
import BrowseArtistIndex from './browse_artist_index';
import BrowseNav from './browse_nav';

class Browse extends React.Component {

  render() {

    return (
      <div className='browse-window'>
        <BrowseNav />
        <Route exact path='/browse' render={() => <Redirect to='/browse/playlists' />} />
        <Route exact path="/browse/playlists" component={BrowsePlaylistIndex} />
        <Route exact path="/browse/albums" component={BrowseAlbumIndex} />
        <Route exact path="/browse/tracks" component={BrowseSongIndex} />
        <Route exact path="/browse/artists" component={BrowseArtistIndex} />
      </div>
    );
  };
};

export default Browse;