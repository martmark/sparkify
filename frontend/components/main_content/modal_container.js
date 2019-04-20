import { connect } from 'react-redux';
import { closeModal } from './../../actions/modal_actions';
import Modal from './modal';

const msp = state => {
  return({
    modalType: state.ui.modal.modalType
  })
}

const mdp = dispatch => {
  return({
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(msp, mdp)(Modal);