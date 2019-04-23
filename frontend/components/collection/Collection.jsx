import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CollectionPlaylistIndex from './col_playlist_index';
import CollectionArtistIndex from './col_artist_index';
import CollectionSongIndex from './col_song_index';
import CollectionAlbumIndex from './col_album_index';
import SongIndex from './../song/song_index';
import CollectionNav from './collection_nav';
import AlbumIndex from './../album/album_index';
import ArtistIndex from './../artist/artist_index';
import { fetchPlaylists } from './../../actions/playlist_actions';
import { fetchArtists } from './../../actions/artist_actions';
import { fetchAlbums } from './../../actions/album_actions';
import { fetchSongs } from './../../actions/song_actions';
import { connect } from 'react-redux';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';

class Collection extends React.Component {


  render() {
    const { artists, albums, songs, loading } = this.props;
    
      if (loading) {
        return(
          <h1>Loading...</h1>
        )
      }

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