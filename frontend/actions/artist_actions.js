import * as ArtistAPIUtil from './../util/artist_api_util';

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

const receiveArtist = payload => {
  return({
    type: RECEIVE_ARTIST,
    payload
  });
};

export const fetchArtist = id => dispatch => {
  return ArtistAPIUtil.fetchArtist(id).then(payload => {
    return dispatch(receiveArtist(payload));
  });
};