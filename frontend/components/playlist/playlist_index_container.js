import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { fetchPlaylists } from './../../actions/playlist_actions';

const msp = (state, ownProps)  => {
  let playlists = [];
  if (state.entities.playlists) playlists = Object.values(state.entities.playlists);
  return({
    playlists
  });
};

const mdp = dispatch => {
  return({
    fetchPlaylists: () => dispatch(fetchPlaylists())
  });
};

export default connect(msp, mdp)(PlaylistIndex);