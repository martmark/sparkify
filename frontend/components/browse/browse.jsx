import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PlaylistIndex from './../playlist/playlist_index';
import SongIndex from './../song/song_index';
import AlbumIndex from './../album/album_index';
import ArtistIndex from './../artist/artist_index';
import { fetchPlaylists } from './../../actions/playlist_actions';
import { fetchArtists } from './../../actions/artist_actions';
import { fetchAlbums } from './../../actions/album_actions';
import { fetchSongs } from './../../actions/song_actions';
import { connect } from 'react-redux';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';

class Browse extends React.Component {

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
      return (
        <h1>Loading...</h1>
      )
    }

    return (
      <div className='browse-window'>

        <Route exact path='/browse' render={() => <Redirect to='/browse/playlists' />} />
        <Route exact path="/browse/playlists" render={(props) => <PlaylistIndex {...props} playlists={playlists} />} />
        <Route exact path="/browse/albums" render={(props) => <AlbumIndex {...props} albums={albums} />} />
        <Route exact path="/browse/tracks" render={(props) => <SongIndex {...props} songs={songs} />} />
        <Route exact path="/browse/artists" render={(props) => <ArtistIndex {...props} artists={artists} />} />
      </div>
    )

  }
}

const msp = state => {
  return ({
    playlists: Object.values(state.entities.playlists),
    artists: Object.values(state.entities.artists),
    albums: Object.values(state.entities.albums),
    songs: Object.values(state.entities.songs),
    loading: state.ui.loading.status
  })
}

const mdp = dispatch => {
  return ({
    fetchPlaylists: () => dispatch(fetchPlaylists({ fetchType: 'browse' })),
    fetchArtists: () => dispatch(fetchArtists({ fetchType: 'browse' })),
    fetchAlbums: () => dispatch(fetchAlbums({ fetchType: 'browse' })),
    fetchSongs: () => dispatch(fetchSongs({ fetchType: 'browse' })),
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    setLoadingFalse: () => dispatch(setLoadingFalse())
  })
}

export default connect(msp, mdp)(Browse);