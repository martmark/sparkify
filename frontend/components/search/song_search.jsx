import React from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from './../../actions/song_actions';
import SongIndex from './../song/song_index';

class SongSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs({fetchType: 'search', searchTerm: this.props.searchTerm})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.props.fetchSongs({ fetchType: 'search', searchTerm: this.props.searchTerm })
    }
  }

  render() {
    if (!this.props.searchTerm) return null;
    if (this.props.songs.length > 0) {
      return(
        <div className='search-song-index'>
          <SongIndex songs={this.props.songs} />
        </div>
      )
    } else {
      return(
        <div><h2>No results</h2></div>
      )
    }
  }
}

const msp = state => {
  return({
    songs: Object.values(state.entities.songs)
  });
};

const mdp = dispatch => {
  return({
    fetchSongs: fetchType => dispatch(fetchSongs(fetchType)),
  });
};

export default connect(msp, mdp)(SongSearch);