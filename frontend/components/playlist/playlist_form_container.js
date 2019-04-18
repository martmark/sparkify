import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import { createPlaylist } from './../../actions/playlist_actions';

const mdp = (dispatch) => ({
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
})

export default connect(null, mdp)(PlaylistForm);