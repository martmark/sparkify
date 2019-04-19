import { connect } from 'react-redux';
import { fetchArtist } from './../../actions/artist_actions';
import ArtistShow from './artist_show';

const msp = (state, ownProps) => {
  let artistId = ownProps.match.params.artistId;
  let artist = state.entities.artists[artistId];
  return ({
    artistId,
    artist
  });
};

const mdp = dispatch => {
  return ({
    fetchArtist: id => dispatch(fetchArtist(id))
  });
};

export default connect(msp, mdp)(ArtistShow);