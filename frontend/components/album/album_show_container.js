import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchAlbum } from './../../actions/album_actions';

const msp = (state, ownProps) => {
  let albumId = ownProps.match.params.albumId;
  let album = state.entities.albums[albumId];
  return ({
    albumId,
    album,
  })
}

const mdp = dispatch => {
  return ({
    fetchAlbum: id => dispatch(fetchAlbum(id))
  })
}

export default connect(msp, mdp)(AlbumShow);