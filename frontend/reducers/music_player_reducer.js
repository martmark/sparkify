import { SET_CURRENT_SONG, TOGGLE_PLAY, SET_QUEUE } from './../actions/music_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentSong: {
    track_url: 'https://s3.us-east-2.amazonaws.com/sparkify2019/asleep/10.mp3',
    title: 'bury a friend'
  },
  playing: false,
  queue: []
};

const musicPlayerReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_CURRENT_SONG:
      return merge({}, state, { 
        currentSong: action.song,
        playing: true
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
      return merge({}, state, { queue: action.queue });
    default:
      return state;
  }
};

export default musicPlayerReducer;