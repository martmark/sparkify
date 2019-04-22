import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PlaylistIndex from './../playlist/playlist_index';
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

  componentDidMount() {
    this.props.fetchPlaylists()
    .then(() => this.props.fetchArtists())
    .then(() => this.props.fetchAlbums())
    .then(() => this.props.fetchSongs())
    .then(() => this.props.setLoadingFalse());
  }

  componentWillUnmount() {
    this.props.setLoadingTrue();
  }

  render() {
    const { playlists, artists, albums, songs, loading } = this.props;
    
      if (loading) {
        return(
          <h1>Loading...</h1>
        )
      }

      return (
        <div className='collection-window'>
          <CollectionNav />
          <Route exact path='/collection' render={() => <Redirect to='/collection/playlists' />} />
          <Route path="/collection/playlists" render={(props) => <PlaylistIndex {...props} playlists={playlists} />} />
          <Route path="/collection/albums" render={(props) => <AlbumIndex {...props} albums={albums} />} />
          <Route path="/collection/tracks" render={(props) => <SongIndex {...props} songs={songs} />} />
          <Route path="/collection/artists" render={(props) => <ArtistIndex {...props} artists={artists} />} />
        </div>
      )
    
  }
}

const msp = state => {
  return({
    playlists: Object.values(state.entities.playlists),
    artists: Object.values(state.entities.artists),
    albums: Object.values(state.entities.albums),
    songs: Object.values(state.entities.songs),
    loading: state.ui.loading.status
  })
}

const mdp = dispatch => {
  return({
    fetchPlaylists: () => dispatch(fetchPlaylists({ fetchType: 'collection' })),
    fetchArtists: () => dispatch(fetchArtists({ fetchType: 'collection' })),
    fetchAlbums: () => dispatch(fetchAlbums({ fetchType: 'collection' })),
    fetchSongs: () => dispatch(fetchSongs({ fetchType: 'collection' })),
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    setLoadingFalse: () => dispatch(setLoadingFalse())
  })
}

export default connect(msp, mdp)(Collection);