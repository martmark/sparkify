import { SET_CURRENT_SONG, TOGGLE_PLAY, SET_QUEUE } from './../actions/music_actions';
import merge from 'lodash/merge';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const defaultState = {
  currentSong: {
    track_url: '',
    title: ''
  },
  playing: false,
  queue: [{
    track_url: '',
    title: ''
  }],
  currentIdx: 0
};

const musicPlayerReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_CURRENT_SONG:
      return { 
        currentSong: action.queueInfo.currentSong,
        playing: true,
        currentIdx: action.queueInfo.currentIdx,
        queue: action.queueInfo.queue
      };
    case TOGGLE_PLAY:
      let newState = merge({},state);
      if (newState.playing === true) {
        newState.playing = false;
      } else {
        newState.playing = true;
      }
      return newState;
    case SET_QUEUE:
      return merge({}, state, { queue: action.queue, currentIdx: action.currentIdx });
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
};

export default musicPlayerReducer;