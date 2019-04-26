import { SET_CURRENT_SONG, TOGGLE_PLAY, SET_QUEUE } from './../actions/music_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentSong: {
    track_url: 'https://s3.us-east-2.amazonaws.com/sparkify2019/asleep/10.mp3',
    title: 'bury a friend'
  },
  playing: false,
  queue: [],
  currentIdx: 0
};

const musicPlayerReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_CURRENT_SONG:
      return merge({}, state, { 
        currentSong: action.queueInfo.currentSong,
        playing: true,
        currentIdx: action.queueInfo.currentIdx,
        queue: action.queueInfo.queue
      });
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
    default:
      return state;
  }
};

export default musicPlayerReducer;