import * as AlbumAPIUtil from './../util/album_api_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

const receiveAlbum = payload => {
  return({
    type: RECEIVE_ALBUM,
    payload
  });
};

export const fetchAlbum = id => dispatch => {
  return AlbumAPIUtil.fetchAlbum(id).then(payload => {
    return dispatch(receiveAlbum(payload));
  });
};