import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import loadingReducer from './loading_reducer';
import musicPlayerReducer from './music_player_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  loading: loadingReducer,
  musicPlayer: musicPlayerReducer
});

export default uiReducer;