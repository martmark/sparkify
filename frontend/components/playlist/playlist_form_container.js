import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import { createPlaylist } from './../../actions/playlist_actions';
import { closeModal } from './../../actions/modal_actions';

const mdp = (dispatch) => ({
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  closeModal: () => dispatch(closeModal())
})

export default connect(null, mdp)(PlaylistForm);