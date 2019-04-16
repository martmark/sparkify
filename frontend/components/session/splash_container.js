import { demoLogin } from './../../actions/session_actions';
import { connect } from 'react-redux';
import Splash from './splash'

const mdp = dispatch => {
  return({
    demoLogin: () => {
      return dispatch(demoLogin())
    }
  });
};

export default connect(null, mdp)(Splash);