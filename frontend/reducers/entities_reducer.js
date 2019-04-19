import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import playlistsReducer from './playlists_reducer';
import songsReducer from './songs_reducer';
import albumsReducer from './albums_reducer';
import artistsReducer from './artists_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  playlists: playlistsReducer,
  songs: songsReducer,
  albums: albumsReducer,
  artists: artistsReducer
});

export default entitiesReducer;