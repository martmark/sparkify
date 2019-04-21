import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { fetchPlaylists } from '../../actions/playlist_actions';

const msp = (state, ownProps)  => {
  let playlists = [];
  if (state.entities.playlists) playlists = Object.values(state.entities.playlists);
  return({
    playlists,
    loading: state.ui.loading.status
  });
};

const mdp = dispatch => {
  return({
    fetchPlaylists: () => dispatch(fetchPlaylists({fetchType: 'collection'}))
  });
};

export default connect(msp, mdp)(PlaylistIndex);