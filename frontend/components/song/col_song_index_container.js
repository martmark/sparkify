import { connect } from 'react-redux';
import SongIndex from './song_index';

const msp = state => {
  let songs = [];
  if (state.entities.songs) {
    songs = Object.values(state.entities.songs)
  }
  return({
    songs
  });
};



export default connect(msp)(SongIndex);