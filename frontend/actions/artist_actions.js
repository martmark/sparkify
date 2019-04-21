import * as ArtistAPIUtil from './../util/artist_api_util';

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

const receiveArtist = payload => {
  return({
    type: RECEIVE_ARTIST,
    payload
  });
};

const receiveArtists = artists => {
  return({
    type: RECEIVE_ARTISTS,
    artists
  });
};

export const fetchArtist = id => dispatch => {
  return ArtistAPIUtil.fetchArtist(id).then(payload => {
    return dispatch(receiveArtist(payload));
  });
};

export const fetchArtists = fetchType => dispatch => {
  return ArtistAPIUtil.fetchArtists(fetchType).then(artists => {
    return dispatch(receiveArtists(artists));
  });
};