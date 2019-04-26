import React from 'react';
import { connect } from 'react-redux';
import { fetchArtists } from './../../actions/artist_actions';
import ArtistIndex from './../artist/artist_index';

class ArtistSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtists({ fetchType: 'search', searchTerm: this.props.searchTerm })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.props.fetchArtists({ fetchType: 'search', searchTerm: this.props.searchTerm })
    }
  }

  render() {
    if (!this.props.searchTerm) return null;
    if (this.props.artists.length > 0) {
      return (
        <div className='search-artist-index'>
          <ArtistIndex artists={this.props.artists} />
        </div>
      )
    } else {
      return (
        <div><h2>No results</h2></div>
      )
    }
  }
}

const msp = state => {
  return ({
    artists: Object.values(state.entities.artists)
  });
};

const mdp = dispatch => {
  return ({
    fetchArtists: fetchType => dispatch(fetchArtists(fetchType)),

  });
};

export default connect(msp, mdp)(ArtistSearch);