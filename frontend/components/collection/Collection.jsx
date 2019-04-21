import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PlaylistIndex from './../playlist/playlist_index';
import CollectionNav from './collection_nav';
import { fetchPlaylists } from './../../actions/playlist_actions';
import { fetchArtists } from './../../actions/artist_actions';
import { fetchAlbums } from './../../actions/album_actions';
import { fetchSongs } from './../../actions/song_actions';
import { connect } from 'react-redux';

class Collection extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists();
    this.props.fetchArtists();
    this.props.fetchAlbums();
    this.props.fetchSongs();
  }

  render() {
    return (
      <div>
        <CollectionNav />
        <Route exact path='/collection' render={() => <Redirect to='/collection/playlists' />} />
        <Route path="/collection/playlists" component={PlaylistIndex} />
      </div>
    )
  }
}

const msp = state => {
  return({
    playlists: Object.values(state.entities.playlists),
    artists: Object.values(state.entities.artists),
    albums: Object.values(state.entities.albums),
    songs: Object.values(state.entities.songs)
  })
}

const mdp = dispatch => {
  return({
    fetchPlaylists: () => dispatch(fetchPlaylists({ fetchType: 'collection' })),
    fetchArtists: () => dispatch(fetchArtists({ fetchType: 'collection' })),
    fetchAlbums: () => dispatch(fetchAlbums({ fetchType: 'collection' })),
    fetchSongs: () => dispatch(fetchSongs({ fetchType: 'collection' }))
  })
}

export default connect(msp, mdp)(Collection);